import React from "react";
import { render, act, screen, queryByAttribute } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { VeryNice } from "../../components/DegeneracyComponents/VeryNice";

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

test("Renders Very Nice", () => {
    act(() => {
        render(<VeryNice />, container)
    });
    expect(screen.getByText("Very Nice")).toBeInTheDocument;
    expect(screen.getByText("Great Success")).toBeInTheDocument;
    expect(screen.getByAltText("WahWahWeeWah")).toBeInTheDocument;
});

