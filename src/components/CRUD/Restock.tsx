import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

interface RestockProps {
    beerOfInterest: Beer;
    beer: Beer[] | null;
    setBeer: ((value: Beer[]) => void) | null;
}

export const Restock = ({ beerOfInterest, beer, setBeer }: RestockProps): JSX.Element => {
    const updateOnSubmit = () => {
        if (beer && setBeer) {
            const index = beer.indexOf(beerOfInterest);
            const numBoxesToAdd = parseInt((document.getElementById("num-boxes") as HTMLInputElement).value);
            console.log("Adding " + numBoxesToAdd.toString() + " boxes at " + index);
            beer[index].BeersLeft += beer[index].BoxSize * numBoxesToAdd;
            setBeer(beer);
        } else {
            console.log("Could not save changes in: Restock -- One of the following was null");
            console.log("beer exists: " + (beer != null));
            console.log("setBeer exists: " + (setBeer != null));
        }
        location.href = "/#/beerTable";
    };
    if (beerOfInterest.Name != "") {
        return (
            <div className="crud-screen">
                <h1>Going on a beer run...</h1>
                <h2 className="crud-header">
                    How many {beerOfInterest.BoxSize} racks of {beerOfInterest.Name} should I get?
                </h2>
                <div className="form">
                    <Form onSubmit={() => updateOnSubmit()}>
                        <Form.Label>Boxes to get:</Form.Label>
                        <FormControl type="text" placeholder="69" className="mr-sm-2" id="num-boxes" />
                        <Form.Label>Remaining: {beerOfInterest.BeersLeft}</Form.Label>
                        <button className="mr-sm-2" type="submit" data-testid="restock-button">
                            Restock
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
