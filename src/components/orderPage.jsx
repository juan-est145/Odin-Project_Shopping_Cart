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
	let finalPrice = (Math.round((shopItem.price * shopItem.quantity) * 100) / 100).toFixed(2);

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
				<p>{`${shopItem.price} x ${shopItem.quantity} = ${finalPrice} €`}</p>
				<button className="deleteBtn" onClick={deleteItem}>Remove order</button>
			</div>
		</div>

	);
}

function TotalPayment({order})
{
	let totalPrice = Object.values(order).reduce((total, amount) => (
		total +	(amount.price * amount.quantity)
	), 0);
	let message = "This is a mock website, you can't buy anything here";

	return (
		<div className="paymentInfo">
			<h1>{`Total amount: ${(Math.round(totalPrice * 100)/100).toFixed(2)} €`}</h1>
			<button onClick={() => alert(message)} className="payBtn">Proceed to payment</button>
		</div>
	);
}

ShopOrder.propTypes = {
	shopItem: PropTypes.object,
	setOrder: PropTypes.func,
}

TotalPayment.propTypes = {
	order: PropTypes.object,
}