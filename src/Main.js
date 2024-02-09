import React from "react";
import Work from "./Work";
import Skills from "./Skills";
import foto from "./foto.jpeg";

export default function Main(){
    return(
        <div className="main">
            <img src={foto} alt="personal" className="img-fluid"/>
            <h1>Evyenia Mejia Mabragañis</h1>
            <hr/>
            <h2>Data Analyst</h2>
            <h2>Mechatronics Engineer</h2>
            <hr/>
            <button className="btn btn-primary">hello</button>
            <Work/>
            <Skills/>
        </div>
    )
}