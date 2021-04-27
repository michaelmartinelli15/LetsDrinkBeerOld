import { useDegeneracyComponent, DegeneracyProps } from "../utils/useDegeneracyComponent";

export const DegeneracyScreen = ({ degeneracyLevel }: DegeneracyProps): JSX.Element => {
    return useDegeneracyComponent(degeneracyLevel);
};
