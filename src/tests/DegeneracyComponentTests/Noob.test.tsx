import React from "react";
import { render, act, screen, queryByAttribute } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Noob } from "../../components/DegeneracyComponents/Noob";

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

test("Renders Noob", () => {
    act(() => {
        render(<Noob />, container)
    });
    expect(screen.getByText("Noob")).toBeInTheDocument;
    expect(screen.getByAltText("Do you even drink?")).toBeInTheDocument;
});

