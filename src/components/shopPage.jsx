import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function ShopPage() {
	const {items, setItems} = useOutletContext();

	useEffect(() => {
		if (items.length !== 0)
			return;
		getShopItems().then((shopItems) => {
			if (shopItems)
				setItems(shopItems);
		});
	}, [items, setItems]);

	return (
		<>
			<h1>Shop</h1>
			<h3>See something that you fancy?</h3>
			<Items items={items}></Items>
			<Link to="/">Go back</Link>
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