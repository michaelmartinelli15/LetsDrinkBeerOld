import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { NewGuy } from "../../components/DegeneracyComponents/NewGuy";

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

test("Renders New Guy", () => {
    act(() => {
        render(<NewGuy />, container);
    });
    expect(screen.getByText("New Guy")).toBeInTheDocument;
    expect(screen.getByAltText("You must be new here")).toBeInTheDocument;
});
