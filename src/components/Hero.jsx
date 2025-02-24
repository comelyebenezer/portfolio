import React from 'react'
import comelyprofile from "../assets/comelyprofile.webp"
import { HERO_CONTENT } from "../constants"
import { motion } from 'framer-motion'



const containerVaraints = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.5, }}
}

const childVaraints = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, }}
}


const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <motion.img src={comelyprofile} alt="comely profile picture" className='border border-stone-900
                    rounded-3xl'
                    width={650}
                    height={650}
                    initial={{ x:100, opacity: 0 }} 
                    animate={{ x:0, opacity:1 }}
                    transition={{ transition:1, delay: 1.5 }}
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div
                    initial="hidden"
                    animate='visible'
                    variants={ containerVaraints } 
                    className='flex flex-col items-center lg:items-start mt-10'>

                        <motion.h2 
                        variants={childVaraints}
                        className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Comely Ebenezer</motion.h2>

                        <motion.span 
                        variants={childVaraints} 
                            className='bg-gradient-to-r from-stone-300 to-stone-600
                            bg-clip-text text-2xl tracking-tight text-transparent lg:3xl'> Front End Developer</motion.span>

                            <motion.p 
                            variants={childVaraints} 
                                className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'> {HERO_CONTENT}</motion.p>

                            <motion.a 
                            variants={childVaraints} 
                                href="/COMELY EBENEZER CV.pdf" target='blank' rel='noopener noreferrer' download 
                                className='bg-white rounded-md p-4 text-sm text-stone-800 mb-10'>Download Resume</motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero