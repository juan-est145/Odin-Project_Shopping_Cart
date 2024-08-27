import { Link } from "react-router-dom";
import "../styles/errorPage.css";

export function ErrorPage() {
	return (
		<main className="errorPage">
			<h1>Oops, it seems that you got lost</h1>
			<h3>
				Do not worry, you can go back to the main page by clicking this button
			</h3>
			<Link to="/">
				<button className="shopBtn">Return</button>
			</Link>
		</main>
	);
}