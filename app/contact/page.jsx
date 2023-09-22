"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import ContactForm from '../components/contact';
import ContactFormNew from '../components/contact-new';

export default function Contact() {
  return (
<div className="max-w-8xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-8 mt-8">Contact Us</h1>
        <ContactFormNew />
    </div>

  )
}