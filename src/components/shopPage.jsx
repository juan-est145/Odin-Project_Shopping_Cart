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
		<>
			<h1>Shop</h1>
			{!loading ? <h3>See something that you fancy?</h3> : null}
			{loading ? <Loader></Loader> : <Items items={items}></Items>}
		</>
	);
}

function Items({ items }) {
	return (
		<>
			{items.map((element) => {
				return (
					<ul key={element.id}>
						<li>{element.title}</li>
						<li>{element.price}</li>
						<li>{element.category}</li>
						<li>{element.description}</li>
						<img src={element.image} alt="Something" />
					</ul>
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