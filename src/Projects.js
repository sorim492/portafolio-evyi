import React from "react";
import covid from "./covid tracker.jpeg";

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <h2>Portfolio</h2>
            <img src={covid} alt="Global covid-19 tracker" className="img-fluid"/>
        </div>
    )
}