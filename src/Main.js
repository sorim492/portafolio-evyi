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
                    <div className="col-4">
                        <h1>Evyenia Mejia Mabragañis</h1>
                    </div>  
                    <div className="col-8">
                        <img src={foto} alt="personal" className="img-fluid"/>
                    </div>
                </div>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-6">
                                <h2>Data Analyst</h2>
                            </div>
                            <div className="col-6">
                                <h2>Mechatronics Engineer</h2>
                            </div>
                        </div>
                    </div>
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