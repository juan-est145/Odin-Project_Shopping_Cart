import App from "./components/App";
import { HomePage } from "./components/homePage";
import {ShopPage} from "./components/shopPage";
import { AboutPage } from "./components/aboutPage";
import { OrderPage } from "./components/orderPage";
import { ErrorPage } from "./components/errorPage";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "order", element: <OrderPage /> },
			{ path: "*", element: <ErrorPage />}
		]
	},
];

export default routes;