import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion';

function Contactform() {
  return (
<section className="py-6 mt-10 ">

    <div className='border-t border-stone-900 pb-5'>
        <motion.h2 
            
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity:0, y:-100 }}
            transition={{ duration: 0.5 }}
            className='my-10 text-center text-4xl'>Get in Touch

        </motion.h2>
    </div>

	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">

			<motion.p 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity:0, x:-100 }}
                transition={{ duration: 1 }} 
                className="pt-2 pb-4">Fill in the form to start a conversation
                
            </motion.p>

			<div className="space-y-4">
				<motion.p 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity:0, x:-100 }}
                    transition={{ duration: 1 }} 
                    className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{CONTACT.address}</span>
				</motion.p>

				<motion.p 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity:0, x:-100 }}
                    transition={{ duration: 1 }} 
                    className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>{CONTACT.phoneNo}</span>
				</motion.p>

				<motion.p 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity:0, x:-100 }}
                    transition={{ duration: 1 }} 
                    className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>{CONTACT.email}</span>
				</motion.p>

			</div>
		</div>
        <form  
            action="https://formspree.io/f/mvgzwdzv" 
            method="POST" 
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
            <label htmlFor="fullName" className="block">
                <span className="mb-1">Full name</span>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    placeholder="Comely Ebenezer" 
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-gray-100 text-black" 
                    required 
                />
            </label>
            <label htmlFor="email" className="block">
                <span className="mb-1">Email address</span>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="comely.jr@gmail.com" 
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-gray-100 text-black" 
                    required 
                />
            </label>
            <label htmlFor="message" className="block">
                <span className="mb-1">Message</span>
                <textarea 
                    rows="3" 
                    id="message" 
                    name="message"
                    className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-gray-100 text-black" 
                    required 
                ></textarea>
            </label>
            <button 
                type="submit" 
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:bg-white hover:text-black focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:ring-violet-600"
            >
                Submit
            </button>
</form>


	</div>
</section>  )
}

export default Contactform