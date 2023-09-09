'use client'

import ParticlesBackground from './components/ParticlesBackground'
import {FiInstagram} from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <ParticlesBackground />
      <div className='h-[90vh] flex justify-center flex-col items-start md:mx-36 mx-12'>
        <div className='flex flex-col md:flex-row md:justify-between w-full mt-8'>
          <div>
            <h1 className='text-5xl font-title'>Lautaro Sebastian Lazzeri</h1>
            <div className='flex items-center mt-8 mb-8'>
              <Link href='/'><FiInstagram       className='text-gray-400 hover:text-white h-8 w-8' /> </Link>
              <Link href='/'><AiOutlineLinkedin className='text-gray-400 hover:text-white h-8 w-8 ml-3' /> </Link>
              <Link href='/'><AiOutlineGithub   className='text-gray-400 hover:text-white h-8 w-8 ml-3' /> </Link>
              <Link href='/'><HiOutlineMail     className='text-gray-400 hover:text-white h-8 w-8 ml-3' /> </Link>
            </div>
          </div>
          <div className='md:ml-8 '>
            <h2 className='text-3xl font-body md:w-72 '>Front-end Web and Mobile Developer </h2>
            <p className='md:w-72 mt-8 text-gray-400'>Monogram is a digital agency from Atlanta, specializing in headless ecommerce, web development, and web apps.</p>
          </div>
        </div>
      </div>



      <div className='relative mt-80'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae corporis modi provident architecto pariatur ratione quisquam ducimus, sunt ut hic? Non obcaecati facilis ex a recusandae placeat tempore iste laborum nesciunt. Quod nisi asperiores totam cumque quo soluta illum at, velit vitae aperiam aspernatur odio harum laudantium perspiciatis accusantium eum dolorem fuga quas voluptas debitis repellendus facere. Dolor veniam ipsa consequuntur expedita, aliquid amet perferendis fugiat odit debitis, illum exercitationem.</p>
      </div>
    </div>
  )
}
