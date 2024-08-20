import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "../src/header";

describe("Header", () => {
	it("Renders the basic stuff", () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	})
})