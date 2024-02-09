import React from "react";
import logo from './data-logo.png';

export default function Header(){
return(
    <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
)
}