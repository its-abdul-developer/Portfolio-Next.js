import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div >
        <div className='text-center mt-10'>
            <Image alt='' src={isDarkMode? assets.logo_dark :assets.logo} className='w-36 mx-auto mb-3' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image alt='' src={assets.mail_icon} className=' w-6' /> williammark@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 William Mark. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
                <li>Connect with me</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
