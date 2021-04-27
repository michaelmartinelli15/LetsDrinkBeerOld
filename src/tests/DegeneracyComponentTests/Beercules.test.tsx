import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Beercules } from "../../components/DegeneracyComponents/Beercules";

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

test("Renders Beercules", () => {
    act(() => {
        render(<Beercules />, container);
    });
    expect(screen.getByText("Beercules")).toBeInTheDocument;
    expect(screen.getByTestId("beercules-frame")).toBeInTheDocument;
});
