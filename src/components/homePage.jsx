import { Link, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types"
import "../styles/homePage.css"
import motherBoardImage from "../../public/motherBoard.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Header({ activePage, setActivePage }) {
	let className = "activePage";
	let firstIndex = 0;
	let secondIndex = 1;
	let thirdIndex = 2;

	return (
		<header>
			<div className="headerLogo">
				<Link
					to="/"
					onClick={() => setActivePage(firstIndex)}>
					<FontAwesomeIcon icon={faLaptopCode} id="iconLogo" />
					PC Store
				</Link>
			</div>
			<nav className="headerNav">
				<Link
					to="/"
					className={activePage === firstIndex ? className : null}
					onClick={() => setActivePage(firstIndex)}>
					Home</Link>
				<Link
					to="shop"
					className={activePage === secondIndex ? className : null}
					onClick={() => setActivePage(secondIndex)}>
					Shop</Link>
				<a
					href="#"
					className={activePage === thirdIndex ? className : null}
					onClick={() => setActivePage(thirdIndex)}
				>About</a>
				<FontAwesomeIcon icon={faCartShopping} />
			</nav>
		</header>
	);
}

export function HomePage() {
	const {setActivePage} = useOutletContext();
	let shopIndex = 1;

	return (
		<main>
			<img src={motherBoardImage} alt="An image of a mother board" className="mainPhoto" />
			<div className="homeText">
				<h1>Looking for hardware? You are at the right place.</h1>
				<h3>PC Store provides great hardware for a competitive price. Don&apos;t believe us? Check it out!</h3>
			</div>
			<Link 
				to="shop"
				onClick={() => setActivePage(shopIndex)}>
				<button className="shopBtn">Shop now</button>
			</Link>
		</main>
	)
}

Header.propTypes = {
	activePage : PropTypes.number,
	setActivePage: PropTypes.func,
}