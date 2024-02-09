import React from "react";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import foto from "./foto.jpeg";

export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={foto} alt="personal" className="img-fluid"/>
                    </div>
                    <div className="col-6">
                        <h1>Evyenia Mejia Mabragañis</h1>
                    </div>  
                </div>
                <hr/>
                    <h2>Data Analyst</h2>
                    <h2>Mechatronics Engineer</h2>
                    <hr/>
                    <Work/>
                    <Skills/>
                    <div>
                    <Contact/>
                    </div>
            </div>
        </div>
    )
}