import "./styles/mainPage.css"

export default function Header() {
	return (
		<header>
			<a href="#"className="Title">PC Store</a>
			<nav className="headerNav">
				<a href="#">Home</a>
				<a href="#">Shop</a>
				<a href="#">About</a>
				<a href="#">Cart</a>
			</nav>
		</header>
	)
}