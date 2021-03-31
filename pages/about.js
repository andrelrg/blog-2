import React, { useState } from "react";
import App from '../src/organisms/App'


function About() {
    const [firstIn, setFirstIn] = useState("");

    const onInputChange = (event) => {
        let text = event.target.value;
        if (text === "itlvht"){
            setFirstIn(event.target.value)
        }
    }

    if(firstIn) {
        if (typeof window !== "undefined") {
            window.location = "/pascoa";
        }
    }else{
        return (
            <App>
                <div>
                    <input type="text" onChange={onInputChange}></input>
                </div>
            </App>)
    }
    //itlvht tkmank tgtcnebt vhkhgtobknl
}

export default About;