import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any*/

export const useLocalStorage = (
    key: string,
    initialValue: any[] | any,
): [any[] | any, (value: any[] | any) => void] => {
    const [storedBeers, setStoredBeers] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.warn("Setting localStorage went wrong: ", err);
            return initialValue;
        }
    });

    const setValue = (value: any[]) => {
        console.log("Setting new beer");
        try {
            const valueToStore = value instanceof Function ? value(storedBeers) : value;
            setStoredBeers(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedBeers, setValue];
};
