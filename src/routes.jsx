import App from "./components/App";
import { HomePage } from "./components/homePage";
import ShopPage from "./components/shopPage";
import { AboutPage } from "./components/aboutPage";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "about", element: <AboutPage /> }
		]
	},
];

export default routes;