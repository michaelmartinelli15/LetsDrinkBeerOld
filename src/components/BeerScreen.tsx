import React from "react";
import { BeerTable, BeerTableProps } from "./BeerTable";

export interface BeerScreenProps {
    TableProps: BeerTableProps | null;
}

export const BeerScreen = ({ TableProps }: BeerScreenProps): JSX.Element => {
    return (
        <div className="screen">
            <h1>Beers</h1>
            <a href="/#/create">Create New</a>
            <BeerTable {...(TableProps as BeerTableProps)} />
        </div>
    );
};
