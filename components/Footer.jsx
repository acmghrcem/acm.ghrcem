import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from "./ui/navbar-menu";
import logo from '../public/acmlogo.svg';
import { FaInstagram, FaTwitter, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-center md:items-start p-8 bg-black text-white">
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src={logo} alt="College Club" width={100} height={100} />

        <div className='mt-6 flex space-x-4'>
          <Link href={"https://www.instagram.com/acm.ghrcem/"}>
          <FaInstagram className='text-2xl' />
          </Link>
          <Link href={"https://x.com/acmghrcem"}>
          <FaTwitter className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaGithub className='text-2xl' />
          </Link>
          <Link href={"https://youtube.com/@acmghrcem?si=pf8eFhqbmI5pZPig"}>
          <FaYoutube className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaLinkedin className='text-2xl' />
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col text-center md:text-left mb-8 md:mb-0">
        <h3 className="mb-4 font-bold text-blue-400 text-lg">Connect With Us</h3>
        <ul className="list-none p-0 space-y-2">
          <li>
            <Link href={"https://www.instagram.com/acm.ghrcem/"}>
              <MenuItem item="Instagram" />
            </Link>
          </li>
          <li>
            <Link href={"https://x.com/acmghrcem"}>
              <MenuItem item="Twitter" />
            </Link>
          </li>
          <li>
            <Link href={"https://youtube.com/@acmghrcem?si=pf8eFhqbmI5pZPig"}>
              <MenuItem item="Youtube" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item="Linkedin" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item='Github' />
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col text-center md:text-left mb-8 md:mb-0">
        <h3 className="mb-4 text-lg">Useful Links</h3>
        <ul className="list-none p-0 space-y-2">
          <li>
            <Link href={"/aboutus"}>
              <MenuItem item="About Us" />
            </Link>
          </li>
          <li>
            <Link href={"/contactus"}>
              <MenuItem item="Contact" />
            </Link>
          </li>
          <li>
            <Link href={"/events"}>
              <MenuItem item='Events' />
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col text-center md:text-left">
        <h4 className="mb-4 text-lg">Resources</h4>
        <ul className="list-none p-0 space-y-2">
          <li>
            <Link href={"/blog"}>
              <MenuItem item='Blog' />
            </Link>
          </li>
          <li>
            <Link href={"/faq"}>
              <MenuItem item='FAQ' />
            </Link>
          </li>
          <li>
            <Link href="/support">
              <MenuItem item='Support' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

