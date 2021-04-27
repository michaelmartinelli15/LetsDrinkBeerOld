import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BeerScreen } from "../components/BeerScreen";

/* eslint-disable @typescript-eslint/no-explicit-any*/

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

test("Renders Title (Beers)", () => {
    act(() => {
        render(<BeerScreen TableProps={null} />, container);
    });
    expect(screen.getByText("Beers")).toBeInTheDocument;
});

test("Renders Create New Link", () => {
    act(() => {
        render(<BeerScreen TableProps={null} />, container);
    });
    expect(screen.getByTestId("create-new-link")).toBeInTheDocument;
});

test("Renders Beer Table", () => {
    act(() => {
        render(<BeerScreen TableProps={null} />, container);
    });
    expect(screen.getByTestId("beer-table")).toBeInTheDocument;
});
