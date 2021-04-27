import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Nice } from "../../components/DegeneracyComponents/Nice";

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

test("Renders Nice", () => {
    act(() => {
        render(<Nice />, container);
    });
    expect(screen.getByText("Nice")).toBeInTheDocument;
    expect(screen.getByText("Nice.")).toBeInTheDocument;
});
