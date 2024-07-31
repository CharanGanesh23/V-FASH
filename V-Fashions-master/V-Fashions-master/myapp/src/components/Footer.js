import React from 'react'
import { logoDark, paymentLogo } from '../assets'
import {
    FaFacebookF,
    ImGithub,
    ImTelegram,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
    ImFacebook,
    ImInstagram
} from "react-icons/im"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont flex'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className="w-32"src={logoDark}></img>
                <p className='text-white text-sm tracking-wide py-2'></p>
                <img className='w-56' src={paymentLogo}></img>
                <div className='w-50 flex flex-ro gap-3'>
                    <ImGithub className='hover:text-white  duration-300 cursor-pointer'/>
                    <ImTelegram className='hover:text-white  duration-300 cursor-pointer'/>
                    <ImFacebook className='hover:text-white  duration-300 cursor-pointer' />
                    <ImInstagram className='hover:text-white  duration-300 cursor-pointer'/>
                    
                    
                </div>
            </div>

            <div>

                <h2 className='text-2xl font-semihold text-white p mb-4 text-center'>Locate us</h2>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.0043323305002!2d78.4990568231239!3d13.559406852738721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26674a639dbdf%3A0x567be615a190831b!2sNTR%20Circle%20Madanapalle!5e0!3m2!1sen!2sin!4v1696661997995!5m2!1sen!2sin"></iframe>
            </div>

            <div className='text-2xl flex flex-col font-semihold text-white p mb-4 text-center'>
                <h2 className='text-2xl font-semihold text-white text-center mb-4 mt-0 pl-50'>CONTACT US</h2>
                <h3>M.MOHAN</h3>
                <p className='text-white'><u><a href='mailto:charanganesh2003@gmail.com'>charanganesh2003@gmail.com</a></u></p>
            
                <p className="text-white px-6"> PH: 6300393166</p>
            </div>
        </div>
    </div>
  )
}

export default Footer