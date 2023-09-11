import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Footer from '../../src/app/containers/Footer'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import Image from 'next/image'
import { BiLogoJavascript } from 'react-icons/bi'
import { SiTailwindcss } from 'react-icons/si'


export default function Meditacion() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Landing Page de práctica</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://meditationweb.vercel.app/' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar página web</p>
            <FiArrowUpRight className='ml-2' />
          </div>
        </Link>
        </div>

        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <h4 className='text-xl font-medium'>Sector</h4>
            <p className='text-[#ffffff6d]'>Diseño y desarrollo</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <h4 className='text-xl font-medium mb-1'>Tecnologías</h4>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>NextJs</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>CSS</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Javascript</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Figma</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>
          Esta página es una Landing page la cual fue desarrollada a modo de práctica con el fin de mostrar la estructura de una página web de una startUp. El diseño fue realizado previamente en Figma y luego se pasó a código con NextJs y CSS.
        </p>
        <Image src='/landing.jpg' width={500} height={300} alt='Landing page' className='mt-5 strange-padding' />
      </div>
  </div>


  </div>

  <Footer />



    </>
  )
}