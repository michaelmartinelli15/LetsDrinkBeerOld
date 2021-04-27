import React from "react";

export const DangerZone = (): JSX.Element => {
    return (
        <div className="degeneracy-level">
            <h1>Danger Zone</h1>
            <iframe
                className="degeneracy-image"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0IGSJGcai_k?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
};
