import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./homePage";

function App() {
	const [items, setItems] = useState([]);
	const [order, setOrder] = useState({});
	
	return (
		<>
			<Header order={order}></Header>
			<Outlet context={{items, setItems, order, setOrder}}></Outlet>
		</>
	);
}

export default App
