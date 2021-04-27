import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

interface RestockProps {
    beerOfInterest: Beer;
    beer: Beer[];
    setBeer: (value: Beer[]) => void;
}

export const Restock = ({ beerOfInterest, beer, setBeer }: RestockProps): JSX.Element => {
    const updateOnSubmit = () => {
        const index = beer.indexOf(beerOfInterest);
        const numBoxesToAdd = parseInt((document.getElementById("num-boxes") as HTMLInputElement).value);
        console.log("Adding " + numBoxesToAdd.toString() + " boxes at " + index);
        beer[index].BeersLeft += beer[index].BoxSize * numBoxesToAdd;
        setBeer(beer);
        location.href = "/#/beerTable";
    };

    return (
        <div className="crud-screen">
            <h1>Going on a beer run...</h1>
            <h2 className="crud-header">
                How many {beerOfInterest.BoxSize} racks of {beerOfInterest.Name} should I get?
            </h2>
            <div className="form">
                <Form onSubmit={() => updateOnSubmit()}>
                    <Form.Label>How many boxes?</Form.Label>
                    <FormControl type="text" placeholder="69" className="mr-sm-2" id="num-boxes" />
                    <button className="mr-sm-2" type="submit">
                        Restock
                    </button>
                </Form>
            </div>
        </div>
    );
};
