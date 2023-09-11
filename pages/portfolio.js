import '../src/app/globals.css'
import ParticlesBackground from '../src/app/components/ParticlesBackground'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

import { BiLogoCss3 } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { TbSeo } from 'react-icons/tb'
import { DiFirebase } from 'react-icons/di'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoFlutter } from 'react-icons/bi'
import { SiDart } from 'react-icons/si'
import { BiLogoWordpress } from 'react-icons/bi'
import { SiSvelte } from 'react-icons/si'


import { BiGitBranch } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGitlab } from 'react-icons/ai'
import { DiScrum } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { RxVercelLogo } from 'react-icons/rx'




export default function Portfolio() {
  return (
    <>
      <ParticlesBackground />
      <div className='md:mx-36 mx-8'>
        <div className='w-full mt-20'>
          <h1 className='md:text-5xl text-2xl mb-12 '>Proyectos que he realizado</h1>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-12'>

          <div>
            <Image src='/metodosilva.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='metodo silva'
            />
            <div>
              <div className='flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl mt-4 text-xl font-title'>Metodo Silva</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/metodosilva' className='text-gray-300 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://elmetodosilva.com.ar' target='_blank' className='ml-8 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />

                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:mt-64 mt-12'>
            <Image src='/reta.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Balneario Reta'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap '>
                <h3 className='md:text-2xl text-xl mt-4 font-title'>Balneario Reta Oficial</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/balnearioreta' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://balnearioretaoficial.com.ar' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />

                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:-mt-40 mt-12'>
            <Image src='/ceci.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Complejo la Merlina'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Complejo La Merlina</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/lamerlina' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://complejolamerlina.com.ar' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />

                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:mt-24 mt-12'>
            <Image src='/sicars.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Sicars eventos'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Sicars Eventos</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/sicars' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://sicars.vercel.app' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />

                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiFirebase className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:-mt-40 mt-12'>
            <Image src='/seguridad.PNG'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Seguridad informática'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Seguridad informática</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/itisjt' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://seguridad-itisjt.vercel.app/' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />
                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <AiOutlineHtml5 className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>


          <div className='md:mt-24 mt-12'>
            <Image src='/yutena.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Micros La Yuteña'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Viajes La Yuteña</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/layutena' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://viajes-paraguay-layutena.com/' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />
                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <BiLogoWordpress className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>


          <div className='md:-mt-36 mt-12'>
            <Image src='/meditation.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Meditation Web'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Meditación (En Progreso)</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/meditacion' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://meditationweb.vercel.app/' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />
                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <SiSvelte className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <SiTailwindcss className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>



          <div className='md:mt-24 mt-12'>
            <Image src='/landing.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='landing page'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Startup Landing</h3>
                <div className='mt-4'>
                  <Link href='/portfolio/landing' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                  <Link href='https://nextjs-website-lazzeri.netlify.app/' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                    <FaArrowRight className='inline ml-2 ' />
                  </Link>
                </div>
              </div>
              <div className='mt-4 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>




        </div>

        <div className='mt-16 w-full flex justify-center text-center'>
          <Link href='https://github.com/lautarolazzeri' target='_blank'>
            <button className=' bg-gray-300 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
              Ver más en Github
            </button>
          </Link>
        </div>

      </div>


      <footer className='mt-24 flex justify-center flex-col items-center h-56 w-full'>
        <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
        <Link href='#header'>
          <button className=' bg-gray-300 mt-4 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
            Scroll to top
          </button>
        </Link>
      </footer>

    </ >
  );
}