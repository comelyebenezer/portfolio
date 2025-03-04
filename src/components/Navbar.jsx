import React from 'react'
import logo from "../assets/comelylogo.webp"
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} className='mx-2' width={50} height={33} alt="logo" />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/comely-ebenezer" 
                target='blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin />
            </a>

            <a href="https://github.com/comelyebenezer" 
                target='blank' rel='noopener noreferrer' aria-label='Github'>
                <FaGithub />
            </a>

            <a href="https://wa.me/08133693087" 
                target='blank' rel='noopener noreferrer' aria-label='Whatsapp'>
                <FaWhatsapp />
            </a>

            <a href="mailto:comely.jr@gmail.com" 
                target='blank' rel='noopener noreferrer' aria-label='Gmail'>
                <MdOutlineMail  />
            </a>

        </div>
    </nav>
  )
}

export default Navbar