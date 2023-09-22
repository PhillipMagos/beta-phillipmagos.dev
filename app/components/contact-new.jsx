"use client";

import { useState } from "react";
//import { useRouter } from 'next/router'; // A. this is used to redirect the webpage
import React from "react";

export default function ContactFormNew() {
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
    <div className="grid gap-6 mb-6 md:grid-cols-1 mx-auto w-1/2 ">
        <div className=" w-full">
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

        <div className="w-full">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input 
  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setLastname(e.target.value)}
            value={lastname}
            type="text" 
            id="lastname" 
            placeholder="Last Name" />

        </div>
        <div className="w-full">
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input 

            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={e => setCompany(e.target.value)}
            value={company}
            type="text" 
            id="company" 
            placeholder="Company" />
        </div>  
        <div className="w-full">
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

<div className="grid gap-6 mb-10 pb-10 md:grid-cols-1 mx-auto w-1/2 ">
    <div className="mb-6 w-full">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input 

        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="text" 
        id="email" 
        placeholder="Email" />
    </div> 
                
                  <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                      <textarea
                          onChange={e => setMessage(e.target.value)}
                          value={message}
                          className="h-32 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="message"
                          placeholder="Type your message right here">
                          </textarea>
                  </div>
    <button 
    onClick={handleButtonClick}
    type="submit" 
    className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
    </button>
            </div>
            </form>
        </>
        
    )
}