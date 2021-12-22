import "./Contact.css";

import React, { useState } from 'react'



const Contact = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
    })



//     function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }
    
// console.log(validateEmail('anystring@anystring.anystring'));


    // phone regex ^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$

    console.log(data);

  return (
    <div className="main-container">
    <div className="contact-container">
    <input type="text"  placeholder="Name"  onChange={(e)=> setData({...data, name:e.target.value })}/>
    <input type="email" placeholder="Mail"   onChange={(e)=> setData({...data,email:e.target.value })}/>
    <input type="tel"   placeholder="Phone" onChange={(e)=> setData({...data, phone:e.target.value})}/>
    <textarea  placeholder="Message" onChange={(e)=> setData({...data, message:e.target.value })}/>
    </div>
    </div>
  )
}

export default Contact
