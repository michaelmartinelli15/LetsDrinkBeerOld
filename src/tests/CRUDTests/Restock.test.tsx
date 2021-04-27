import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Restock } from "../../components/CRUD/Restock";
import { Beer } from "../../interfaces/IBeer";

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

test("Renders Drink Screen", () => {
    const testBeer: Beer = {
        Name: "Test Beer",
        Container: "Can",
        Ounces: 12,
        BoxSize: 30,
        BeersLeft: 30,
        TotalDrank: 0,
    };
    act(() => {
        render(<Restock beerOfInterest={testBeer} beer={null} setBeer={null} />, container);
    });
    expect(screen.getByText("Going on a beer run...")).toBeInTheDocument;
    expect(screen.getByText("How many 30 racks of Test Beer should I get?")).toBeInTheDocument;
    expect(screen.getByText("Boxes to get:")).toBeInTheDocument;
    expect(screen.getByText("Remaining: 30")).toBeInTheDocument;
    expect(screen.getByTestId("restock-button")).toBeInTheDocument;
});
