import React, { useEffect } from "react";
import { Table, Container, Col } from "react-bootstrap";
import { Beer } from "../interfaces/IBeer";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export interface BeerTableProps {
    setBeerOfInterest: React.Dispatch<React.SetStateAction<Beer>>;
    beer: Beer[] | null;
    setBeer: (value: Beer[]) => void;
    beerCount: number;
    setBeerCount: (value: any) => void;
}
/* eslint-enable @typescript-eslint/no-explicit-any*/

export const BeerTable = ({ setBeerOfInterest, beer, setBeer }: BeerTableProps): JSX.Element => {
    const removeFromTable = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        beer?.splice(index, 1);
        setBeer(beer as Beer[]);
    };

    const drinkFromTable = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        console.log("Setting beer to drink");
        setBeerOfInterest((beer as Beer[])[index]);
        console.log("Set to " + JSON.stringify((beer as Beer[])[index]));
    };

    const restockFromTable = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        console.log("Setting beer to restock");
        setBeerOfInterest((beer as Beer[])[index]);
        console.log("Set to " + JSON.stringify((beer as Beer[])[index]));
    };

    useEffect(() => {
        console.log("Change to beer array");
    }, [beer]);

    if (beer) {
        return (
            <div className="beer-table">
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Container</th>
                            <th>Ounces</th>
                            <th>Box Size</th>
                            <th>Beers Left</th>
                            <th>Total Drank</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beer.map((beer, index) => (
                            <tr key={beer.Name} id={index.toString()}>
                                <td>{beer.Name}</td>
                                <td>{beer.Container}</td>
                                <td>{beer.Ounces}</td>
                                <td>{beer.BoxSize}</td>
                                <td>{beer.BeersLeft}</td>
                                <td>{beer.TotalDrank}</td>
                                <Container>
                                    <Col>
                                        <a href="/#/drink" onClick={(e) => drinkFromTable(e, index)}>
                                            Drink
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="/#/restock" onClick={(e) => restockFromTable(e, index)}>
                                            Restock
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="/#/beerTable" onClick={(e) => removeFromTable(e, index)}>
                                            Delete
                                        </a>
                                    </Col>
                                </Container>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    } else return <div></div>;
};
