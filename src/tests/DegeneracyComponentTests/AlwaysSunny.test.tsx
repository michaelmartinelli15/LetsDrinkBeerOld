import React from "react";
import { render, act, screen, queryByAttribute } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { AlwaysSunny } from "../../components/DegeneracyComponents/AlwaysSunny";

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

test("Renders Always Sunny", () => {
    act(() => {
        render(<AlwaysSunny />, container)
    });
    expect(screen.getByText("Always Sunny")).toBeInTheDocument;
    expect(screen.getByText("The Gang Beats Boggs")).toBeInTheDocument;
    expect(screen.getByAltText("The Gang Beats Boggs")).toBeInTheDocument;
});

