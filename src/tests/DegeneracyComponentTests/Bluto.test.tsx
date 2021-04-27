import React from "react";
import { render, act, screen, queryByAttribute } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Bluto } from "../../components/DegeneracyComponents/Bluto";

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

test("Renders Bluto", () => {
    act(() => {
        render(<Bluto />, container);
    });
    expect(screen.getByText("Bluto")).toBeInTheDocument;
    expect(screen.getByText("How is your liver still functioning?")).toBeInTheDocument;
    expect(screen.getByAltText("Welcome to the Animal House")).toBeInTheDocument;
});
