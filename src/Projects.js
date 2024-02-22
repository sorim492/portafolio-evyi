import React from "react";
import covid from "./covid tracker.jpeg";
import habitos from "./habito-lectura.jpeg";

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <h2>Portfolio</h2>
            <div className="project-img">
                <img src={covid} alt="Global covid-19 tracker" className="img-fluid"/>
                <img src={habitos} alt="habitos de lectura en mexico 2019" className="img-fluid"/>
            </div>
        </div>
    )
}