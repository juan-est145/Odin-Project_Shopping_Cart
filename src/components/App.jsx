import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./homePage"

function App() {
	const [items, setItems] = useState([]);

	return (
		<>
			<Header></Header>
			<Outlet context={[items, setItems]}></Outlet>
		</>
	);
}

export default App
