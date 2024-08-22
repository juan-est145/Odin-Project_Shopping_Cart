//import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./homePage"

function App() {
	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
		</>
	);
}

export default App
