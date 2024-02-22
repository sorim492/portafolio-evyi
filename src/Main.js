import React from "react";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import foto from "./foto.jpeg";
import Projects from "./Projects";
import Certificates from "./Certificates";

export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="row name">
                    <div className="col-lg-6 col-sm-12">
                        <h1>Evyenia Mejia Mabragañis</h1>
                    </div>  
                    <div className="col-lg-6 col-sm-12">
                        <img src={foto} alt="personal" className="img-fluid"/>
                    </div>
                </div>
                    <hr/>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2>Data Analyst</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Mechatronics Engineer</h2>
                            </div>
                        </div>
                    </div>
                    <p> Engineer with experience in project management in industrial maintenance. I
                        have worked on projects aimed at optimizing industrial processes that have
                        taken me to enter the world of data analysis.
                    </p>
                    <p>The motivation for continuous learning has driven me to start training in topics
                        such as data science, programming, and data visualization, supported by tools
                        like Power BI, Python language, Excel. Using these new tools as support,
                        together with more strong skills like AutoCAD, I have been able to develop a
                        robust foundation in engineering project management, gain problem-solving
                        skills, an analytical mindset, and the ability to make informed decisions.
                    </p>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2>Power bi</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Python</h2>
                            </div>
                        </div>
                    </div>
                    <Work/>
                    <Skills/>
                    <Projects/>
                    <Certificates/>
                    <div>
                    <Contact/>
                    </div>
            </div>
        </div>
    )
}