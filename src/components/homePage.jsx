import "../styles/homePage.css"
import motherBoardImage from "../../public/motherBoard.jpg"

export function Header() {
	return (
		<header>
			<a href="#" className="Title">PC Store</a>
			<nav className="headerNav">
				<a href="#">Home</a>
				<a href="#">Shop</a>
				<a href="#">About</a>
				<a href="#">Cart</a>
			</nav>
		</header>
	);
}

export function MainImage() {
	return (
		<main>
			<img src={motherBoardImage} alt="An image of a mother board" className="mainPhoto" />
			<div className="welcomeMessage">
				<h1>Looking for hardware? You are in the right place</h1>
				<button>Shop now</button>
			</div>
		</main>
	)
}