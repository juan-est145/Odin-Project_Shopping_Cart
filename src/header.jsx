import "./styles/mainPage.css"
import motherBoardImage from "../public/motherBoard.jpg"

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
	const style = {
		"margin" : "0px",
		"color" : "white",
	};


	return (
		<main>
			<img src={motherBoardImage} alt="An image of a mother board" className="mainPhoto"/>
			<h1 style={style}>Lorem Ipsum</h1>
		</main>
	)
}