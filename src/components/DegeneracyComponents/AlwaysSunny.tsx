import React from "react";
import ReactAudioPlayer from "react-audio-player";

export const AlwaysSunny = (): JSX.Element => {
    return (
        <div className="degeneracy-level">
            <h1>Always Sunny</h1>
            <h3>The Gang Beats Boggs</h3>
            <img
                className="degeneracy-image"
                src="https://thumbs.gfycat.com/WanOfficialKillerwhale-small.gif"
                alt="The Gang Beats Boggs"
            />

            <br />
            <br />

            <ReactAudioPlayer
                src="https://www.redringtones.com/wp-content/uploads/2018/10/its-always-sunny-in-philadelphia-theme-song.mp3"
                autoPlay
                controls
            />
        </div>
    );
};
