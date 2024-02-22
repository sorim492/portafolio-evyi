import React from "react";

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <br/>
            <h2>
               Send me a message!
            </h2>
            <h3>
               Got a question or proposal, or just want
               to say hello? Go ahead.
            </h3>
            <div className="row">
               <div className='col-4'>
                  <a href='mailto:evyeniamm@hotmail.com' target='_blank' rel="noreferrer" className='contact-link'><i class="fa-regular fa-envelope contact-icon"></i></a>
               </div>
               <div className='col-4'>
                  <a href="linkedin.com/in/evyeniamm/" target="_blank" rel="noreferrer" className='contact-link'><i class="fa-brands fa-linkedin contact-icon"></i></a>
               </div>
               <div className='col-4'>
                  <a href="https://api.whatsapp.com/send?phone=524428676246" target="_blank" rel="noreferrer" className="contact-link"><i class="fa-brands fa-whatsapp contact-icon"></i></a>
               </div>
            </div>
        </div>
    )
}     