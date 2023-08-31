"use client";

import { useState } from "react";
//import { useRouter } from 'next/router'; // A. this is used to redirect the webpage
import React from "react";

export default function ContactForm() {
    const handleButtonClick = () => {
        window.location.reload();
      };
    //const [fullname, setFullname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    //const [success, setSuccess] = useState(false)
    const [modalOpen, setModalOpen] = React.useState(false);
    
    
    const handleSubmit = async (e) => {
        //const router = useRouter(); // A. this is used to redirect the webpage

        // const router = useRouter();
        // const handleButtonClick = () => {
        //     router.reload(); // Reloads the current page
        // }


        e.preventDefault();

        console.log("Full name: ", firstname);
        console.log("Last Name ", lastname);
        console.log("Company: ", company);
        console.log("Phone: ", phone);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                // fullname,
                firstname,
                lastname,
                company,
                phone,
                email,
                message,
            }),
        });

        //router.push('https://www.google.com/'); // A. this is used to redirect the webpage
        const { msg } = await res.json();
        // const { msg, success } = await res.json();
        // setError(msg);
        // console.log(error);
        // setSuccess(success)

        // if(success) {
        //    setFullname("");
        //    setEmail("");
        //    setMessage("");
        // }

        
    };

    return (
        <>
        <form 
        //action="https://www.youtube.com/" // A. this is used to redirect the webpage
        onSubmit={handleSubmit}
        className=""
        >
    <div className="grid gap-6 mb-6 md:grid-cols-2 mx-auto w-1/2 ">
        <div className=" w-4/5">
            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setFirstname(e.target.value)}
            value={firstname}
            type="text" 
            // id="fullname" 
            id="firstname" 
            placeholder="First Name" /> 
        </div>

        <div className="w-4/5">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input 
  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setLastname(e.target.value)}
            value={lastname}
            type="text" 
            id="lastname" 
            placeholder="Last Name" />

        </div>
        <div className="w-4/5">
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input 

            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setCompany(e.target.value)}
            value={company}
            type="text" 
            id="company" 
            placeholder="Company" />
        </div>  
        <div className="w-4/5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input 

            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setPhone(e.target.value)}
            value={phone}
            type="tel" 
            id="phone" 
            placeholder="Phone Number" />
        </div>
  
        </div>

<div className="grid gap-6 mb-6 md:grid-cols-1 mx-auto w-1/2 ">
    <div className="mb-6 max-w-2xl  ">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input 

        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="text" 
        id="email" 
        placeholder="Email" />
    </div> 
                
                  <div className="mb-6 max-w-2xl">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="message">Message</label>
                      <textarea
                          onChange={e => setMessage(e.target.value)}
                          value={message}
                          className="h-32 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="message"
                          placeholder="Type your message right here">Here is some text
                          </textarea>
                  </div>
                  {/* <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input checked id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-800 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Send Resume</label>
    </div> */}

    <button 
    onClick={handleButtonClick}
    type="submit" 
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
    </button>

  

    {/* <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input checked id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-800 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Send Resume</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  */}
            {/* <div>
                <label htmlFor="fullname">Full Name</label>
                <input 
                onChange={e => setFullname(e.target.value)}
                value={fullname}
                type="text" 
                id="fullname" 
                placeholder="John Doe" />
            </div> */}

            {/* <div>
                <label htmlFor="email">Email</label>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text" 
                id="email" 
                placeholder="john@gmail.com" />
            </div> */}

            {/* <div>
                <label htmlFor="message">Your Message</label>
                <textarea 
                onChange={e => setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message" 
                placeholder="type your message right here"></textarea>
            </div> */}
            {/* <button className="bg-green-700 p-3 text-white font-bold" type="submit" onClick={() => setModalOpen(!modalOpen)}>Send</button>
         */}
            </div>
            </form>
        
        {/* <div className="bg-slate-100 flex flex-col">Error Message */}
        {/* <div className="bg-slate-100 flex flex-col">
            {
                error && error.map(e =>(
                    <div className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`}>{e}</div>
                ))
            } */}
        {/* </div> */}
        </>
        
    )
}