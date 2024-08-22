import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./homePage"

function App() {
	const [activePage, setActivePage] = useState(0);
	const [items, setItems] = useState([]);
	
	return (
		<>
			<Header activePage={activePage} setActivePage={setActivePage}></Header>
			<Outlet context={{setActivePage, items, setItems}}></Outlet>
		</>
	);
}

export default App
