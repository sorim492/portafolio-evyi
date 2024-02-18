import React from "react";

export default function Database(props){

    if(props.name){
        return(
            <div className="Database">
                <h2>data</h2>
                <h4>{props.name}</h4>
            </div>
        )
    } else {
        return null;
    }
}