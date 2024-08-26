import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../src/components/homePage";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "../src/components/homePage";
import routes from "../src/routes"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

describe("Main App", () => {
	it("Renders the basic stuff", () => {
		const { container } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it("Nav links work", async () => {
		const user = userEvent.setup();
		const router = createBrowserRouter(routes);
		render(
			<RouterProvider router={router} />
		);
		const aboutLink = screen.getByRole("link", { name: /about/i });
		const homeLink = screen.getByRole("link", { name: /home/i });

		await user.click(aboutLink);
		expect(screen.getByRole("heading").textContent).toMatch(/Work in progress in about page/i);
		await user.click(homeLink)
		expect(screen.getByRole("button").textContent).toMatch(/Shop now/i);
	});
});

describe("Home page", () => {
	it("Renders the title page", () => {
		const description = {
			name: /Looking for hardware\? You are at the right place./i,
		}
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		expect(screen.getByRole("heading", description).textContent).toMatch(/Looking for hardware\? You are at the right place./i);
	});

	it("Renders the the button", () => {
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		expect(screen.getByRole("button").textContent).toMatch(/Shop now/i);
	})
});