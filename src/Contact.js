import React, {useState} from "react";

export default function Contact(){
  
   let [userName, setuserName] = useState("");
   let [userEmail, setuserEmail] = useState("");
   let [message, setuserMessage] = useState(""); 

   function updateUsername(event){
      setuserName(event.target.value);
   }

   function updateUseremail(event){
      setuserEmail(event.target.value);
   }

   function updateUsermessage(event){
      setuserMessage(event.target.value);
   }

    function contactUs(event){
        /*event.preventDefault()*/
        console.log(userName)
        console.log(userEmail) 
        console.log(message)

        alert("Thank you " + userName + ", we'll be in touch at " + userEmail +"!")
    }

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
            <form onSubmit={contactUs}>
               <div className="row">
                  <div className="col-6">
                     <h4>Your name</h4>
                     <input type="text" placeholder="Enter your name" className="contact-name" id="name" required onChange={updateUsername}/>
                  </div>
                  <div className="col-6">
                     <h4>Your email</h4>
                     <input type="email" placeholder="Enter your email" className="contact-email" id="email" required onChange={updateUseremail}/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                  <h4>Your Message</h4>
                     <input type="text" placeholder="Hi, we need you, we're Company X" className="contact-message" id="text" required onChange={updateUsermessage}/>
                  </div>
               </div>
               <br/>
               <input type="submit" value="Send" className="contact-btn"/>
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