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
            <h2>Send me a message!</h2>
            <h3>Got a question or proposal, or just want
               to say hello? Go ahead.</h3>
            <form>
               <div className="row">
                  <div className="col-6">
                     <h4>Your name</h4>
                     <input type="text" placeholder="Enter your name" className="contact-name" id="name"/>
                  </div>
                  <div className="col-6">
                     <h4>Your email</h4>
                     <input type="text" placeholder="Enter your email" className="contact-email" id="email"/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                  <h4>Your Message</h4>
                     <input type="text" placeholder="Hi, we need you, we're Company X" className="contact-message" id="text"/>
                  </div>
               </div>
               <br/>
               <input type="submit" value="Send" className="contact-btn" onClick={contactUs}/>
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