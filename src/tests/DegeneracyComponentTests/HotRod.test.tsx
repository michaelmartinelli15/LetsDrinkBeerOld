import React from "react";
import { render, act, screen, queryByAttribute } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { HotRod } from "../../components/DegeneracyComponents/HotRod";

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

test("Renders Hot Rod", () => {
    act(() => {
        render(<HotRod />, container);
    });
    expect(screen.getByText("Hot Rod")).toBeInTheDocument;
    expect(screen.getByAltText("My name's Rod and I like to party")).toBeInTheDocument;
});
