import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function OrderPage() {
	const { order, setOrder } = useOutletContext();

	return (
		<main>
			<h1>Work in progress in order page</h1>
			<Link to="/">Return to main page</Link>
			{Object.entries(order).map(([id, element]) => (
				<ShopOrder key={id} shopItem={element}></ShopOrder>
			))}
		</main>
	);
}

function ShopOrder({ shopItem }) {
	return (
		<>
			<h3>{shopItem.title}</h3>
			<img src={shopItem.image} alt={`Photo of a ${shopItem.title}`} />
			<p>{`${shopItem.price} x ${shopItem.quantity} = ${shopItem.price * shopItem.quantity} €`}</p>
		</>

	);
}

ShopOrder.propTypes = {
	shopItem: PropTypes.object,
}