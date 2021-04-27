import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Beer } from "./interfaces/IBeer";
import { BeerScreen } from "./components/BeerScreen";
import { BeerTableProps } from "./components/BeerTable";
import { SendItScreen } from "./components/SendItScreen";
import { DegeneracyScreen } from "./components/DegeneracyScreen";
import { useLocalStorage } from "./utils/useLocalStorage";
import { Create } from "./components/CRUD/Create";
import { Drink } from "./components/CRUD/Drink";
import { Restock } from "./components/CRUD/Restock";
import { DegeneracyProps, updateDegeneractyComponent } from "./utils/useDegeneracyComponent";

const App = (): JSX.Element => {
    const emptyBeer: Beer = {
        Name: "",
        Container: "",
        Ounces: 0,
        BoxSize: 0,
        BeersLeft: 0,
        TotalDrank: 0,
    };
    const pbr: Beer = {
        Name: "Pabst Blue Ribbon",
        Container: "Can",
        Ounces: 12,
        BoxSize: 30,
        BeersLeft: 30,
        TotalDrank: 0,
    };
    const Busch: Beer = {
        Name: "Busch",
        Container: "Can",
        Ounces: 12,
        BoxSize: 30,
        BeersLeft: 30,
        TotalDrank: 0,
    };
    const CoorsLight: Beer = {
        Name: "Coors Light",
        Container: "Can",
        Ounces: 12,
        BoxSize: 30,
        BeersLeft: 30,
        TotalDrank: 1,
    };

    const defaultBeer = [pbr, Busch, CoorsLight];

    const [beerData, setBeerData] = useLocalStorage("myBeers", defaultBeer);
    const [lifetimeBeerCount, setLifetimeBeerCount] = useLocalStorage("lifetimeBeerCount", 0);
    const [degeneracyLevel, setDegeneracyLevel] = useState<string>("");
    const [beerOfInterest, setbeerOfInterest] = useState<Beer>(emptyBeer);

    const tableProps: BeerTableProps = {
        setBeerOfInterest: setbeerOfInterest,
        beer: beerData,
        setBeer: setBeerData,
        beerCount: lifetimeBeerCount,
        setBeerCount: setLifetimeBeerCount,
    };

    const degeneracyProps: DegeneracyProps = {
        beerCount: lifetimeBeerCount,
        degeneracyLevel: degeneracyLevel,
        setDegeneracyLevel: setDegeneracyLevel,
    };

    useEffect(() => {
        updateDegeneractyComponent(degeneracyProps);
    }, [lifetimeBeerCount]);

    return (
        <HashRouter>
            <div className="App">
                <Nav degeneracyLevel={degeneracyLevel} beerCount={lifetimeBeerCount} />
                <Switch>
                    <Route path="/beerTable" render={() => <BeerScreen TableProps={tableProps} />} />
                    <Route path="/sendIt" render={() => <SendItScreen />} />
                    <Route path="/degeneracyLevel" render={() => <DegeneracyScreen {...degeneracyProps} />} />
                    <Route path="/create" render={() => <Create beer={beerData} setBeer={setBeerData} />} />
                    <Route path="/drink" render={() => <Drink {...tableProps} beerOfInterest={beerOfInterest} />} />
                    <Route
                        path="/restock"
                        render={() => (
                            <Restock beerOfInterest={beerOfInterest as Beer} beer={beerData} setBeer={setBeerData} />
                        )}
                    />
                    <Route
                        render={() => (
                            <div className="screen">
                                <h1>
                                    Lets Drink Beer
                                    <a className="transparent-button" href="/#/beerTable">
                                        <img
                                            src="https://i.pinimg.com/originals/ec/a3/0d/eca30d66ed55ae1667a1f3c391f16d05.jpg"
                                            className="img-in-line"
                                            alt="Time to pound some brews"
                                        />
                                    </a>
                                </h1>
                                <h2>The jouney to a zillion begins with a single sip</h2>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
