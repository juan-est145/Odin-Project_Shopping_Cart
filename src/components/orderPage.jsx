import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/orderPage.css";

export function OrderPage() {
	const { order, setOrder } = useOutletContext();

	if (Object.entries(order).length <= 0)
	{
		return (
			<h1>Your shopping cart is empty at the moment</h1>
		);
	}

	return (
		<main className="cartDisplay">
			<section>
				{Object.entries(order).map(([id, element]) => (
					<ShopOrder key={id} shopItem={element} setOrder={setOrder}></ShopOrder>
				))}
			</section>
			<section>
				<TotalPayment order={order}></TotalPayment>
			</section>
		</main>
	);
}

function ShopOrder({ shopItem, setOrder }) {
	function deleteItem() {
		setOrder((prevOrder) => {
			const newOrder = {...prevOrder};
			delete newOrder[shopItem.id];
			return (newOrder);
		})
	}

	return (
		<div className="orderCard">
			<img src={shopItem.image} alt={`Photo of a ${shopItem.title}`} />
			<div>
				<h3>{shopItem.title}</h3>
				<p>{`${shopItem.price} x ${shopItem.quantity} = ${shopItem.price * shopItem.quantity} €`}</p>
				<button onClick={deleteItem}>Remove order</button>
			</div>
		</div>

	);
}

function TotalPayment({order})
{
	return (
		<h1>{`${Object.values(order).reduce((total, amount) => (
			total +	(amount.price * amount.quantity)
		), 0)} €`}</h1>
	);
}

ShopOrder.propTypes = {
	shopItem: PropTypes.object,
	setOrder: PropTypes.func,
}

TotalPayment.propTypes = {
	order: PropTypes.object,
}