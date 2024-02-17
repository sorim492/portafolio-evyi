import React from "react";

export default function Contact(){

    function contactUs(event){
        event.preventDefault()
        let name = prompt("What is you name?");
        let email = prompt("What is your email?");

        alert("Thank you " + name + ", we'll be in touch at " + email +"!")
    }

    return(
        <div className="contact" id="contact">
            <br/>
            <form>
                <input type="submit" value="contact" className="contact-btn" onClick={contactUs}/>
            </form>
            <div className="row">
               <div className='col-6'>
                  <a href='mailto:evyeniamm@hotmail.com' target='_blank' rel="noreferrer" className='App-link'><i class="fa-regular fa-envelope"></i></a>
               </div>
               <div className='col-6'>
                  <a href="linkedin.com/in/evyeniamm/" target="_blank" rel="noreferrer" className='App-link'><i class="fa-brands fa-linkedin"></i></a>
               </div>
            </div>
        </div>
    )
}     