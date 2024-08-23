import App from "./components/App";
import { HomePage } from "./components/homePage";
import {ShopPage} from "./components/shopPage";
import { AboutPage } from "./components/aboutPage";
import { OrderPage } from "./components/orderPage";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "order", element: <OrderPage /> },
		]
	},
];

export default routes;