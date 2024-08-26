import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/components/homePage";
import { BrowserRouter } from "react-router-dom";
//import App from "../src/components/App";
import { HomePage } from "../src/components/homePage";

describe("Header", () => {
	it("Renders the basic stuff", () => {
		const { container } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	})
});

describe("Home page", () => {
	it("Renders the title page", () => {
		const description = {
			exact: false,
			name : "Looking for hardware? You are at the right place.",
		}
		render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );
		expect(screen.getByRole("heading", description).textContent).toMatch("Looking for hardware? You are at the right place.");
	});
});