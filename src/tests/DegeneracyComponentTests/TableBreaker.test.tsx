import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { TableBreaker } from "../../components/DegeneracyComponents/TableBreaker";

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

test("Renders Table Breaker", () => {
    act(() => {
        render(<TableBreaker />, container);
    });
    expect(screen.getByText("Table Breaker")).toBeInTheDocument;
    expect(screen.getByAltText("Welcome to the Bills Mafia")).toBeInTheDocument;
});
