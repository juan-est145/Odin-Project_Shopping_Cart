import { Link, NavLink } from "react-router-dom";
import "../styles/homePage.css";
import motherBoardImage from "../../public/motherBoard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export function Header({ order }) {
	let className = "activePage";
	let orderSize = Object.keys(order).length;
	return (
		<header>
			<div className="headerLogo">
				<Link to="/">
					<FontAwesomeIcon icon={faLaptopCode} id="iconLogo" />
					PC Store
				</Link>
			</div>
			<nav className="headerNav">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? className : null}>
					Home</NavLink>
				<NavLink
					to="shop"
					className={({ isActive }) =>
						isActive ? className : null}>
					Shop</NavLink>
				<NavLink
					to="about"
					className={({ isActive }) =>
						isActive ? className : null}>
					About</NavLink>
				<NavLink
					to={"order"}
					className={({ isActive }) =>
						isActive ? className : null}>
					<FontAwesomeIcon icon={faCartShopping} />
					{orderSize > 0 && <span className="cartSize">{orderSize}</span>}
				</NavLink>
			</nav>
		</header>
	);
}

export function HomePage() {

	return (
		<main className="homePage">
			<img src={motherBoardImage} alt="An image of a mother board" className="mainPhoto" />
			<div className="homeText">
				<h1>Looking for hardware? You are at the right place.</h1>
				<h3>PC Store provides great hardware for a competitive price. Don&apos;t believe us? Check it out!</h3>
			</div>
			<Link to="/shop">
				<button className="shopBtn">Shop now</button>
			</Link>
		</main>
	)
}

Header.propTypes = {
	order: PropTypes.object,
}