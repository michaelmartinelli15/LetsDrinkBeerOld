import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

interface CreateProps {
    beer: Beer[] | null;
    setBeer: ((value: Beer[]) => void) | null;
}

export const Create = ({ beer, setBeer }: CreateProps): JSX.Element => {
    const updateOnSubmit = () => {
        if (beer && setBeer) {
            const newBeer: Beer = {
                Name: (document.getElementById("beer-name") as HTMLInputElement).value,
                Container: (document.getElementById("beer-container") as HTMLInputElement).value,
                Ounces: parseInt((document.getElementById("beer-ounces") as HTMLInputElement).value),
                BoxSize: parseInt((document.getElementById("beer-box-size") as HTMLInputElement).value),
                BeersLeft: parseInt((document.getElementById("beer-box-size") as HTMLInputElement).value),
                TotalDrank: 0,
            };

            beer.push(newBeer);
            setBeer(beer as Beer[]);
        } else {
            console.log("Could not save changes in: Create -- One of the following was null");
            console.log("beer exists: " + (beer != null));
            console.log("setBeer exists: " + (setBeer != null));
        }
        location.href = "/#/beerTable";
    };

    return (
        <div className="crud-screen">
            <h1 className="crud-header">Create</h1>
            <div className="form" data-testid="create-form">
                <Form onSubmit={() => updateOnSubmit()}>
                    <FormControl type="text" placeholder="Name" className="mr-sm-2" id="beer-name" />
                    <FormControl type="text" placeholder="Container" className="mr-sm-2" id="beer-container" />
                    <FormControl type="text" placeholder="Ounces" className="mr-sm-2" id="beer-ounces" />
                    <FormControl type="text" placeholder="Box Size" className="mr-sm-2" id="beer-box-size" />
                    <button className="mr-sm-2" type="submit" data-testid="create-button">
                        Create
                    </button>
                </Form>
            </div>
        </div>
    );
};
