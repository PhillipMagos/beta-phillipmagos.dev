"use client"
//import ContactForm from '@/components/contact'\
import ContactForm from '../components/contact'
import React from 'react';


export default function test() {
  const handleButtonClick = () => {
    window.location.reload();
  };

  return (
<div className="max-w-8xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-8 mt-8">Contact Us</h1>

  <button onClick={handleButtonClick}>Refresh Page</button>
</div>
  )
}