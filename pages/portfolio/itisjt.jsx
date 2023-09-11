import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import {RxVercelLogo} from 'react-icons/rx'
import Image from 'next/image'
import { BiLogoJavascript } from 'react-icons/bi'
import { AiOutlineHtml5 } from 'react-icons/ai'


export default function Itisjt() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Seguridad Informática</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='py-5 border-t-2 border-[#636d726d]'>
          <Link href='https://seguridad-itisjt.vercel.app' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar Seguridad Informática Itjst</p>
            <FiArrowUpRight className='ml-2' />
          </div>
        </Link>
        </div>

        <div className='py-5 border-t-2 border-[#636d726d]'>
            <h4 className='text-xl font-medium'>Sector</h4>
            <p className='text-[#ffffff6d]'>Diseño y desarrollo</p>
        </div>
        <div className='py-5 border-t-2 border-[#636d726d]'>
            <h4 className='text-xl font-medium mb-1'>Tecnologías</h4>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Html</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Javascript</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Css3</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='py-4 border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <AiOutlineHtml5 className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 mt-8 md:mt-0'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam impedit incidunt quisquam ab. Tempore ipsa tempora facilis magnam unde vero! Consequuntur laborum rerum magnam, reiciendis deserunt sed corporis nam dolorum molestias eveniet eius culpa ipsum vitae alias ratione tenetur. Fuga, consequatur tempore? Cum, quia?</p>
        <Image src='/seguridad.png' width={500} height={300} alt='metodosilva' className='mt-5' />
      </div>
  </div>

  <footer className='flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
    </footer>



  </div>



    </>
  )
}