import App from "./components/App";
import { HomePage } from "./components/homePage";
import ShopPage from "./components/shopPage";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
		]
	},
];

export default routes;