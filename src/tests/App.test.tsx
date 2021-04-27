import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders home page", () => {
    render(<App />);
    const linkElement = screen.getByText("The jouney to a zillion begins with a single sip");
    expect(linkElement).toBeInTheDocument();
});

test("Renders beer image", () => {
    render(<App />);
    const linkElement = screen.getByAltText("Time to pound some brews");
    expect(linkElement).toBeInTheDocument();
});
