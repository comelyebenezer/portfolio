import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
<footer className="dark:bg-gray-100 dark:text-gray-900">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<a href=""><li>Home</li></a>
            <a href=""><li>Technologies</li></a>
            <a href=""><li>Projects</li></a>
            <a href=""><li>Experience</li></a>
            <a href=""><li>Get in touch</li></a>
            
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				<a rel="noopener noreferrer" href="https://www.linkedin.com/in/comely-ebenezer-5b601a327/"  aria-label='LinkedIn' target='blank' title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaLinkedin />
				</a>

                <a rel="noopener noreferrer" href="https://github.com/comelyebenezer" aria-label='Github' target='blank' title="Github" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaGithub />
				</a>

                <a rel="noopener noreferrer" href="https://wa.me/08133693087" aria-label='Whatsapp' target='blank' title="Whatsapp" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaWhatsapp />
				</a>

                <a rel="noopener noreferrer" href="mailto:comely.jr@gmail.com" aria-label='Gmail' target='blank' title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <MdOutlineMail />
				</a>
                                  
			</div>
		</div>
	</div>
</footer>  )
}

export default Footer