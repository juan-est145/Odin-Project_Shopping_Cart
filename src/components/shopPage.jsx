import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import PropTypes from "prop-types";
import "../styles/shopPage.css"

export function ShopPage() {
	const { items, setItems } = useOutletContext();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (items.length !== 0) {
			setLoading(false);
			return;
		}
		getShopItems().then((shopItems) => {
			if (shopItems)
				setItems(shopItems);
			setLoading(false);
		});
	}, [items, setItems]);

	return (
		<main>
			<h1>Shop</h1>
			{!loading ? <h3>See something that you fancy?</h3> : null}
			<section className="cardContainer">
				{loading ? <Loader></Loader> : <Items items={items}></Items>}
			</section>
		</main>
	);
}

function Items({ items }) {
	return (
		<>
			{items.map((element) => {
				return (<Cards key={element.id} product={element}></Cards>);
			})}
		</>
	);
}

function Cards({ product }) {
	const { order, setOrder } = useOutletContext();

	function updateCart(e) {
		const newQuantity = parseInt(e.target.value, 10);
		const invalidNumber = isNaN(newQuantity) || newQuantity <= 0;

		if (invalidNumber && !order[product.id])
			return;
		else if (invalidNumber && order[product.id]) {
			setOrder((prevOrder) => {
				const newOrder = { ...prevOrder }
				delete newOrder[product.id];
				return (newOrder);
			});
			return;
		}
		setOrder((prevOrder) => ({
			...prevOrder,
			[product.id]: {
				...product,
				quantity: newQuantity <= 0 ? 0 : newQuantity,
			},
		}));
	}

	function incrementBtn() {
		setOrder((prevOrder) => ({
			...prevOrder,
			[product.id]: {
				...product,
				quantity: (prevOrder[product.id]?.quantity || 0) + 1,
			},
		}));
	}

	function decrementBtn() {
		if (!(product.id in order))
			return;

		setOrder((prevOrder) => {
			const newOrder = { ...prevOrder };
			const newQuantity = (newOrder[product.id]?.quantity || 0) - 1;

			if (newQuantity <= 0) {
				delete newOrder[product.id];
			} else {
				newOrder[product.id] = {
					...product,
					quantity: newQuantity,
				};
			}

			return newOrder;
		});
	}

	return (
		<div className="productCard">
			<h3>{product.title}</h3>
			<img src={product.image} alt={`Photo of a ${product.title}`} />
			<p>{`${product.price} €`}</p>
			<div className="inputField">
				<button className="incrementBtn" onClick={incrementBtn}>+</button>
				<input
					type="number"
					min={0}
					placeholder="0"
					value={order[product.id]?.quantity || ""}
					onChange={updateCart}></input>
				<button className="decrementBtn" onClick={decrementBtn}>-</button>
			</div>
		</div>
	);
}

function Loader() {
	return (
		<div className={"spinner"}>
			<h1>Loading</h1>
			<MoonLoader size={100}></MoonLoader>
		</div>
	);
}

async function getShopItems() {
	try {
		const response = await fetch('https://fakestoreapi.com/products/category/electronics', { mode: "cors" });
		const results = await response.json();
		return (results);
	} catch (error) {
		console.error("Failed to fetch items data", error);
	}
}

Items.propTypes = {
	items: PropTypes.array,
};

Cards.propTypes = {
	product: PropTypes.object,
}