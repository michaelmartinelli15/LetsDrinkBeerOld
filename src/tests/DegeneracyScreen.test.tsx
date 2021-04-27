import React from "react";
import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { DegeneracyScreen } from "../components/DegeneracyScreen";
import { DegeneracyProps } from "../utils/useDegeneracyComponent";

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

// Integration Tests -- DegeneracyScreen renders a DegeneracyComponent based on the value of degeneracyLevel
// by calling useDegeneracyComponent hook function
test("Renders Noob", () => {
    const props: DegeneracyProps = {
        beerCount: 0,
        degeneracyLevel: "Noob",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Noob")).toBeInTheDocument;
    expect(screen.getByAltText("Do you even drink?")).toBeInTheDocument;
});

test("Renders New Guy", () => {
    const props: DegeneracyProps = {
        beerCount: 1,
        degeneracyLevel: "New Guy",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("New Guy")).toBeInTheDocument;
    expect(screen.getByAltText("You must be new here")).toBeInTheDocument;
});

test("Renders Super Soft", () => {
    const props: DegeneracyProps = {
        beerCount: 50,
        degeneracyLevel: "Super Soft",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Super Soft")).toBeInTheDocument;
    expect(screen.getByAltText("That just might be the softest thing you've ever said")).toBeInTheDocument;
});

test("Renders Hot Rod", () => {
    const props: DegeneracyProps = {
        beerCount: 100,
        degeneracyLevel: "Hot Rod",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Hot Rod")).toBeInTheDocument;
    expect(screen.getByAltText("My name's Rod and I like to party")).toBeInTheDocument;
});

test("Renders Very Nice", () => {
    const props: DegeneracyProps = {
        beerCount: 200,
        degeneracyLevel: "Very Nice",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Very Nice")).toBeInTheDocument;
    expect(screen.getByText("Great Success")).toBeInTheDocument;
    expect(screen.getByAltText("WahWahWeeWah")).toBeInTheDocument;
});

test("Renders Table Breaker", () => {
    const props: DegeneracyProps = {
        beerCount: 500,
        degeneracyLevel: "Table Breaker",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Table Breaker")).toBeInTheDocument;
    expect(screen.getByAltText("Welcome to the Bills Mafia")).toBeInTheDocument;
});

test("Renders Beercules", () => {
    const props: DegeneracyProps = {
        beerCount: 1000,
        degeneracyLevel: "Beercules",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Beercules")).toBeInTheDocument;
    expect(screen.getByTestId("beercules-frame")).toBeInTheDocument;
});

test("Renders Danger Zone", () => {
    const props: DegeneracyProps = {
        beerCount: 2000,
        degeneracyLevel: "Danger Zone",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Danger Zone")).toBeInTheDocument;
    expect(screen.getByTestId("danger-zone-frame")).toBeInTheDocument;
});

test("Renders Always Sunny", () => {
    const props: DegeneracyProps = {
        beerCount: 5000,
        degeneracyLevel: "Always Sunny",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Always Sunny")).toBeInTheDocument;
    expect(screen.getByText("The Gang Beats Boggs")).toBeInTheDocument;
    expect(screen.getByAltText("The Gang Beats Boggs")).toBeInTheDocument;
});

test("Renders Bluto", () => {
    const props: DegeneracyProps = {
        beerCount: 10000,
        degeneracyLevel: "Bluto",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Bluto")).toBeInTheDocument;
    expect(screen.getByText("How is your liver still functioning?")).toBeInTheDocument;
    expect(screen.getByAltText("Welcome to the Animal House")).toBeInTheDocument;
});

test("Renders Nice", () => {
    const props: DegeneracyProps = {
        beerCount: 69,
        degeneracyLevel: "Nice",
        setDegeneracyLevel: null,
    };
    act(() => {
        render(<DegeneracyScreen {...props} />, container);
    });
    expect(screen.getByText("Nice")).toBeInTheDocument;
});
