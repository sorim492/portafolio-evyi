import React from "react";

export default function Contact(){

    return(
        <div className="contact" id="contact">
            <br/>
            <form>
                <input type="text" className="contact-text"/>
                <input type="submit" value="contact" className="contact-btn"/>
            </form>
            <a href="linkedin.com/in/evyeniamm/" target="_blank" rel="noreferrer" className='App-link'><i class="fa-brands fa-linkedin"></i></a>
        </div>
    )
}