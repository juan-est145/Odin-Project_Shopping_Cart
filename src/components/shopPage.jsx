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
				return (
					<div key={element.id} className="productCard">
						<h3>{element.title}</h3>
						<img src={element.image} alt={`Photo of a ${element.title}`} />
						<p>{`${element.price} €`}</p>
						<div className="inputField">
							<button className="incrementBtn">+</button>
							<input type="number" min={0} placeholder="0"></input>
							<button className="decrementBtn">-</button>
						</div>
					</div>
				);
			})}
		</>
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