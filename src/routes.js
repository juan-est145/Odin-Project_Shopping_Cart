import App from "./components/App";
import ShopPage from "./components/shopPage";

const routes = [
	{
		path: '/',
		element: <App />
	},
	{
		path: "shop",
		element: <ShopPage />
	}
];

export default routes;