import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Drink } from "../../components/CRUD/Drink";
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
        render(
            <Drink beerOfInterest={testBeer} beer={null} setBeer={null} beerCount={420} setBeerCount={null} />,
            container,
        );
    });
    expect(screen.getByText("Lets Pound Some Test Beer")).toBeInTheDocument;
    expect(screen.getByText("How many brews?")).toBeInTheDocument;
    expect(screen.getByTestId("drink-form")).toBeInTheDocument;
    expect(screen.getByTestId("drink-button")).toBeInTheDocument;
});
