"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    //const [success, setSuccess] = useState(false)
    const [modalOpen, setModalOpen] = React.useState(false);  // for the modal
    
    
    const handleSubmit = async (e) => {
        //const router = useRouter(); // A. this is used to redirect the webpage
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email ", email);
        console.log("Message: ", message);

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
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
    <div>
<h1 className='text-center'>Contact Request Form</h1>
<h3>Fill out this form or reach out directly to phillipmagos@gmail.com</h3>
<form onSubmit={handleSubmit}>
    <div class="grid gap-6 mb-6 md:grid-cols-2 mx-auto w-1/2 ">
        <div className=" w-4/5">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required></input>
        </div>
        <div className="w-4/5">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required></input>
        </div>
        <div className="w-4/5">
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company"></input>
        </div>  
        <div className="w-4/5">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
        </div>
  
        </div>

<div className="grid gap-6 mb-6 md:grid-cols-1 mx-auto w-1/2 ">
    <div class="mb-6 max-w-2xl  ">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required></input>
    </div> 
                
                  <div className="mb-6 max-w-2xl">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="message">Message</label>
                      <textarea
                          onChange={e => setMessage(e.target.value)}
                          value={message}
                          className="h-32 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="message"
                          placeholder="Type your message right here"></textarea>
                  </div>
                  <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input checked id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-800 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Send Resume</label>
    </div>

    <button 
    type="submit" 
    className="border-red-400 border-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  

    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input checked id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-800 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Send Resume</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
   
    </div>
</form>

    </div>

  )
}

export default Contact