import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Nav from "../Nav";

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

test("Renders Lets Drink Beer", () => {
    act(() => {
        render(<Nav degeneracyLevel="test" beerCount={69} />, container);
    });
    expect(screen.getByText("Lets Drink Beer")).toBeInTheDocument;
});

// test("Renders Degeneracy Level", () => {
//     act(() => {
//         render(<Nav degeneracyLevel="test" beerCount={69} />, container)
//     });
//     expect(screen.getByText("Degeneracy")).toBeInTheDocument;
// });

// test("Renders Lifetime Beer Count", () => {
//     act(() => {
//         render(<Nav degeneracyLevel="test" beerCount={69} />, container)
//     });
//     let element = getById(container, "degeneracy-text") as HTMLInputElement;
//     expect(element).toBeDefined;
//     console.log(element.value)
// });
