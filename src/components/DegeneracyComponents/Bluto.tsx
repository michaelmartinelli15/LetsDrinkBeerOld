import React from "react";
import "../../styling/ComponentStyle.css";

export const Bluto = (): JSX.Element => {
    return (
        <div className="degeneracy-level">
            <h1>Bluto</h1>
            <h3>How is your liver still functioning?</h3>

            <img
                className="degeneracy-image"
                src="https://i.pinimg.com/originals/07/e3/fd/07e3fd9588e7d86d84f9395052a7e1fa.jpg"
                title="Welcome to the Animal House"
            />
        </div>
    );
};
