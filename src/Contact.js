import React from "react";

export default function Contact(){

function Contact(event){
    alert("hello")
}

    return(
        <div className="contact">
            <button className="btn btn-secondary" onClick={Contact}>Contact</button>
            <br/>
            <form>
                <input type="text"/>
                <input type="submit" value="contact"/>
            </form>
        </div>
    )
}