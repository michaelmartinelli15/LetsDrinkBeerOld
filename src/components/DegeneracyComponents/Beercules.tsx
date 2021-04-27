import React from "react";
import "../../styling/ComponentStyle.css";

export const Beercules = (): JSX.Element => {
    return (
        <div className="degeneracy-level">
            <h1>Beercules</h1>
            <iframe
                className="degeneracy-image"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/25GMJBxZ9Nk?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
};
