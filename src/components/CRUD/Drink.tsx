import React, { useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

interface DrinkProps {
    beerOfInterest: Beer;
    beer: Beer[] | null;
    setBeer: (value: Beer[]) => void;
    beerCount: number;
    setBeerCount: (value: any) => void;
}

export const Drink = ({ beerOfInterest, beer, setBeer, beerCount, setBeerCount }: DrinkProps): JSX.Element => {
    const updateOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event);
        const count: number = parseInt((document.getElementById("beer-count") as HTMLInputElement).value);

        const index: number | undefined = beer?.indexOf(beerOfInterest);

        if ((index as number) >= 0 && count <= (beer as Beer[])[index as number].BeersLeft) {
            (beer as Beer[])[index as number].TotalDrank += count;
            (beer as Beer[])[index as number].BeersLeft -= count;

            setBeerCount((beerCount += count));

            setBeer(beer as Beer[]);
        } else {
            console.log("Not enough beer");
        }

        location.href = "/#/beerTable";
    };

    useEffect(() => {
        console.log("Beer of interest: " + JSON.stringify(beerOfInterest));
    }, [beerOfInterest]);

    return (
        <div className="crud-screen">
            <h1 className="crud-header">Lets Pound Some {beerOfInterest.Name}</h1>
            <div className="form">
                <Form onSubmit={(e) => updateOnSubmit(e)}>
                    <Form.Label>How many brews?</Form.Label>
                    <FormControl type="text" placeholder="69" className="mr-sm-2" id="beer-count" />
                    <button className="mr-sm-2" type="submit">
                        Drink
                    </button>
                </Form>
            </div>
        </div>
    );
};
