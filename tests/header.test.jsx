import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Header } from "../src/components/homePage";
import { BrowserRouter } from "react-router-dom";

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