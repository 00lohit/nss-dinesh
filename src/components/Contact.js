import "./Contact.css";

import React, { useState } from 'react'
import firebase from "./firebase";
import db from "./firebase";
import { collection, addDoc } from 'firebase/firestore/lite';



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

    const collectionRef = collection(db, "contact");

const submit = async ()=> {
  await addDoc( collectionRef, data) 

  setData({
    name:"",
    email:"",
    phone:"",
    message:""
    })
};

  return (
    <div className="main-container">
    <div className="contact-container">
    <input type="text"  placeholder="Name"   value={data.name} onChange={(e)=> setData({...data, name:e.target.value })}/>
    <input type="email" placeholder="Mail"   value={data.email}  onChange={(e)=> setData({...data,email:e.target.value })}/>
    <input type="tel"   placeholder="Phone"  value={data.phone} onChange={(e)=> setData({...data, phone:e.target.value})}/>
    <textarea  placeholder="Message"  value={data.message} onChange={(e)=> setData({...data, message:e.target.value })}/>
    <button onClick={submit}>Submit</button>
    </div>
    </div>
  )
}

export default Contact
