import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";






const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='p-4'>
                <TbBrandJavascript  className='text-7xl text-yellow-600' />
            </div>
            <div className='p-4'>
                <FaHtml5 className='text-7xl text-red-700' />

            </div>

            <div className='p-4'>
                <FaCss3 className='text-7xl text-blue-600' />
            </div>

            <div className='p-4'>
                <TbBrandTailwind  className='text-7xl text-blue-500' />
            </div>
            <div className='p-4'>
                <FaNodeJs className='text-7xl text-green-500' />
            </div>
            <div className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </div>
        </div>
    </div>
  )
}

export default Technologies