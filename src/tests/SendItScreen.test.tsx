import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { SendItScreen } from "../components/SendItScreen";

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

test("Renders Send Policy", () => {
    act(() => {
        render(<SendItScreen />, container);
    });
    expect(screen.getByText("Send Policy")).toBeInTheDocument;
    expect(screen.getByText("No half-sends")).toBeInTheDocument;
});

test("Renders Send Image", () => {
    act(() => {
        render(<SendItScreen />, container);
    });
    expect(screen.getByAltText("To a zillion and beyond")).toBeInTheDocument;
});
