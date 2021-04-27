import React, { useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

/* eslint-disable @typescript-eslint/no-explicit-any*/

interface DrinkProps {
    beerOfInterest: Beer;
    beer: Beer[] | null;
    setBeer: ((value: Beer[]) => void) | null;
    beerCount: number;
    setBeerCount: ((value: any) => void) | null;
}

export const Drink = ({ beerOfInterest, beer, setBeer, beerCount, setBeerCount }: DrinkProps): JSX.Element => {
    const updateOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event);
        const count: number = parseInt((document.getElementById("beer-count") as HTMLInputElement).value);

        if (beerOfInterest && beer && setBeer && setBeerCount) {
            const index: number = beer.indexOf(beerOfInterest);

            if (index >= 0 && count <= beer[index].BeersLeft) {
                beer[index].TotalDrank += count;
                beer[index].BeersLeft -= count;
                setBeerCount((beerCount += count));
                setBeer(beer);
            } else {
                console.log("Not enough beer");
            }
        } else {
            console.log("Could not save changes in: Drink -- One of the following was null");
            console.log("beerOfInterest exists: " + (beerOfInterest != null));
            console.log("beer exists: " + (beer != null));
            console.log("setBeer exists: " + (setBeer != null));
            console.log("setBeerCount exists: " + (setBeerCount != null));
        }
        location.href = "/#/beerTable";
    };

    useEffect(() => {
        console.log("Beer of interest: " + JSON.stringify(beerOfInterest));
    }, [beerOfInterest]);

    if (beerOfInterest.Name != "") {
        return (
            <div className="crud-screen">
                <h1 className="crud-header">Lets Pound Some {beerOfInterest.Name}</h1>
                <div className="form" data-testid="drink-form">
                    <Form onSubmit={(e) => updateOnSubmit(e)}>
                        <Form.Label>How many brews?</Form.Label>
                        <FormControl type="text" placeholder="69" className="mr-sm-2" id="beer-count" />
                        <button className="mr-sm-2" type="submit" data-testid="drink-button">
                            Drink
                        </button>
                    </Form>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Something went wrong...</h1>
                <a href="/#/beerTable">Return to Beer Table</a>
            </div>
        );
    }
};
