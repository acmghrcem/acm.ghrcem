"use client";
import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
      };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
         <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 md:w-1/2 rounded-lg">
          <h1 className="text-3xl font-bold mb-4"> Let&apos;s get in touch</h1>
          <p className="mb-4">
            Welcome to the ACM GHRCEM Club Pune!
          </p>
          <p className="mb-4">
            Join us to connect, collaborate, and develop your skills in a vibrant community of tech enthusiasts. Connect with us today and be part of our journey towards innovation and excellence! For any inquiries, feel free to reach out. Let &apos; s learn and grow together!
          </p>
          <p className="mb-4">
            ACM GHRCEM Club Pune
          </p>
          <p>
            <strong>📍 GHRCEM, Wagholi Pune</strong><br />
            <strong>📧 acmghrcem@gmail.com</strong><br />
            <strong>📞 +91 81778 98801</strong>
          </p>
          <div className="mt-6">
            <p className="font-semibold mb-2">Connect with us :</p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-white rounded-full inline-flex items-center justify-center">🌐</span>
              <span className="w-8 h-8 bg-white rounded-full inline-flex items-center justify-center">🌐</span>
              <span className="w-8 h-8 bg-white rounded-full inline-flex items-center justify-center">🌐</span>
            </div>
         </div>
        </div>
        <div className="bg-black p-8 md:w-1/2 rounded-lg mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl text-blue-400 font-bold mb-4">Contact us !!</h1>
          <div className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className='mb-4'>
            <h3>First Name</h3>
            <Input id="firstname" placeholder="Shubham" type="text" />
            </div>
            <div className='mb-4'>
            <h3>Last name</h3>
            <Input id="lastname" placeholder="Sahu" type="text" />
            </div>
        </div>
        <div className="mb-4">
          <h3>Email Address</h3>
          <Input id="email" placeholder="shubhamsahu60582@gmail.com" type="email" />
        </div>
        <div className="mb-4">
          <h3>Phone Number</h3>
          <Input id="password" placeholder="••••••••" type="number" />
        </div>
        <div className="mb-8">
          <h3>Message</h3>
          <Input
            id="message"
            placeholder="Message / Feedback"
            type="text"
          />
        </div>
        <button
            type='submit' 
            className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Sumbit
                </div>
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
