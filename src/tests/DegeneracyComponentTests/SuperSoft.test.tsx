import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { SuperSoft } from "../../components/DegeneracyComponents/SuperSoft";

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

test("Renders Super Soft", () => {
    act(() => {
        render(<SuperSoft />, container);
    });
    expect(screen.getByText("Super Soft")).toBeInTheDocument;
    expect(screen.getByAltText("That just might be the softest thing you've ever said")).toBeInTheDocument;
});
