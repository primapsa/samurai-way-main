import React, {useState} from "react";
import {OnOffBody} from "./OnOffBody";

export const OnOff = () => {
    const [mode, setMode] = useState<boolean>(false);
    const modeToggle = () => setMode(!mode);
    return (

        <>
            <OnOffBody mode={mode} callback={modeToggle}/>
        </>
    )
}