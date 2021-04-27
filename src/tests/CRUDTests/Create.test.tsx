import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Create } from "../../components/CRUD/Create";

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

test("Renders Create Screen", () => {

    act(() => {
        render(<Create beer={null} setBeer={null} />, container);
    });
    expect(screen.getAllByText("Create")).toBeInTheDocument;
    expect(screen.getByTestId("create-form")).toBeInTheDocument;
    expect(screen.getByTestId("create-button")).toBeInTheDocument;
});
