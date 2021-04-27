import React from "react";
import { AlwaysSunny } from "../components/DegeneracyComponents/AlwaysSunny";
import { Beercules } from "../components/DegeneracyComponents/Beercules";
import { Bluto } from "../components/DegeneracyComponents/Bluto";
import { DangerZone } from "../components/DegeneracyComponents/DangerZone";
import { HotRod } from "../components/DegeneracyComponents/HotRod";
import { NewGuy } from "../components/DegeneracyComponents/NewGuy";
import { Nice } from "../components/DegeneracyComponents/Nice";
import { Noob } from "../components/DegeneracyComponents/Noob";
import { SuperSoft } from "../components/DegeneracyComponents/SuperSoft";
import { TableBreaker } from "../components/DegeneracyComponents/TableBreaker";
import { VeryNice } from "../components/DegeneracyComponents/VeryNice";

export interface DegeneracyProps {
    beerCount: number;
    degeneracyLevel: string;
    setDegeneracyLevel: React.Dispatch<React.SetStateAction<string>> | null;
}

export const useDegeneracyComponent = (degeneracyLevel: string): JSX.Element => {
    switch (degeneracyLevel) {
        case "Always Sunny":
            return <AlwaysSunny />;
        case "Beercules":
            return <Beercules />;
        case "Bluto":
            return <Bluto />;
        case "Danger Zone":
            return <DangerZone />;
        case "Hot Rod":
            return <HotRod />;
        case "New Guy":
            return <NewGuy />;
        case "Nice":
            return <Nice />;
        case "Noob":
            return <Noob />;
        case "Super Soft":
            return <SuperSoft />;
        case "Table Breaker":
            return <TableBreaker />;
        case "Very Nice":
            return <VeryNice />;
        default:
            return <div></div>;
    }
};

export const updateDegeneractyComponent = ({ beerCount, setDegeneracyLevel }: DegeneracyProps): void => {
    const calculateDegenCode = (count: number): number => {
        if (count == 69) return 69;
        else if (count >= 1 && count < 50) return 1;
        else if (count >= 50 && count < 100) return 2;
        else if (count >= 100 && count < 200) return 3;
        else if (count >= 200 && count < 500) return 4;
        else if (count >= 500 && count < 1000) return 5;
        else if (count >= 1000 && count < 2000) return 6;
        else if (count >= 2000 && count < 5000) return 7;
        else if (count >= 5000 && count < 10000) return 8;
        else if (count >= 10000) return 9;
        else return 0;
    };

    if (setDegeneracyLevel) {
        switch (calculateDegenCode(beerCount)) {
            case 0:
                setDegeneracyLevel("Noob");
                break;
            case 69:
                setDegeneracyLevel("Nice");
                break;
            case 1:
                setDegeneracyLevel("New Guy");
                break;
            case 2:
                setDegeneracyLevel("Super Soft");
                break;
            case 3:
                setDegeneracyLevel("Hot Rod");
                break;
            case 4:
                setDegeneracyLevel("Very Nice");
                break;
            case 5:
                setDegeneracyLevel("Table Breaker");
                break;
            case 6:
                setDegeneracyLevel("Beercules");
                break;
            case 7:
                setDegeneracyLevel("Danger Zone");
                break;
            case 8:
                setDegeneracyLevel("Always Sunny");
                break;
            case 9:
                setDegeneracyLevel("Bluto");
                break;
            default:
                setDegeneracyLevel("");
                break;
        }
    }
};
