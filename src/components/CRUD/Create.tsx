import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { Beer } from "../../interfaces/IBeer";
import "../../styling/ComponentStyle.css";

interface CreateProps {
    beer: Beer[];
    setBeer: (value: Beer[]) => void;
}

export const Create = ({ beer, setBeer }: CreateProps): JSX.Element => {
    const updateOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event);

        const newBeer: Beer = {
            Name: (document.getElementById("beer-name") as HTMLInputElement).value,
            Container: (document.getElementById("beer-container") as HTMLInputElement).value,
            Ounces: parseInt((document.getElementById("beer-ounces") as HTMLInputElement).value),
            BoxSize: parseInt((document.getElementById("beer-box-size") as HTMLInputElement).value),
            BeersLeft: parseInt((document.getElementById("beer-box-size") as HTMLInputElement).value),
            TotalDrank: 0,
        };

        beer.push(newBeer);
        setBeer(beer);
        location.href = "/#/beerTable";
    };

    return (
        <div className="crud-screen">
            <h1 className="crud-header">Create</h1>
            <div className="form">
                <Form onSubmit={(e) => updateOnSubmit(e)}>
                    <FormControl type="text" placeholder="Name" className="mr-sm-2" id="beer-name" />
                    <FormControl type="text" placeholder="Container" className="mr-sm-2" id="beer-container" />
                    <FormControl type="text" placeholder="Ounces" className="mr-sm-2" id="beer-ounces" />
                    <FormControl type="text" placeholder="Box Size" className="mr-sm-2" id="beer-box-size" />
                    <button className="mr-sm-2" type="submit">
                        Create
                    </button>
                </Form>
            </div>
        </div>
    );
};
