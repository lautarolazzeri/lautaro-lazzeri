'use client'

import ParticlesBackground from './components/ParticlesBackground'
import {FiInstagram} from 'react-icons/fi'
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
import {SiSvelte} from 'react-icons/si'


import { BiGitBranch } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGitlab } from 'react-icons/ai'
import { DiScrum } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'











export default function Home() {
  return (
    <div className=''>
      <ParticlesBackground />

      <div id='header' className='h-[93vh] flex justify-center flex-col items-start md:mx-36 mx-8'>
        <div className='flex flex-col md:flex-row md:justify-between w-full mt-8'>
          <div>
            <h1 className='text-5xl font-title'>Lautaro Sebastian Lazzeri</h1>
            <div className='flex items-center mt-8 mb-8'>
              <Link href='/'><FiInstagram       className='text-gray-400 hover:text-white duration-150 h-8 w-8' /> </Link>
              <Link href='/'><AiOutlineLinkedin className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='/'><AiOutlineGithub   className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='/'><HiOutlineMail     className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
            </div>
          </div>
          <div className='md:ml-8 '>
            <h2 className='text-3xl font-title md:w-72 '>Front-end Web and Mobile Developer </h2>
            <p className='md:w-72 mt-8 text-gray-400'>Monogram is a digital agency from Atlanta, specializing in headless ecommerce, web development, and web apps.</p>
          </div>
        </div>
      </div>


      <div className='relative border-t-2 border-[#636d726d] bg-[#00000020]'>
        <h2 className='md:mx-36 mx-8 mt-12 text-3xl mb-12 font-title'>Latest Projects</h2>
        <div className='md:mx-36 mx-8 md:grid md:grid-cols-2 md:gap-12'>

          <div>
            <Image src='https://lautarolazzeri.vercel.app/images/metodosilva.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='metodo silva'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Metodo Silva</h3>
                <div className='mt-4 mb-2'>
                <Link href='/' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                <Link href='https://elmetodosilva.com.ar'  target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                  <FaArrowRight className='inline ml-2 ' />

                </Link>
                </div>
              </div>
              <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:mt-64 mt-16'>
            <Image src='https://lautarolazzeri.vercel.app/images/reta.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Balneario Reta'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap '>
                <h3 className='md:text-2xl text-xl mt-4 font-title'>Balneario Reta Oficial</h3>
                <div className='mt-4 mb-2'>
                <Link href='/' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                <Link href='https://balnearioretaoficial.com.ar'  target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                  <FaArrowRight className='inline ml-2 ' />

                </Link>
                </div>
              </div>
              <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:-mt-40 mt-16'>
            <Image src='https://lautarolazzeri.vercel.app/images/ceci.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Complejo la Merlina'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Complejo La Merlina</h3>
                <div className='mt-4 mb-2'>
                <Link href='/' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                <Link href='https://complejolamerlina.com.ar'  target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                  <FaArrowRight className='inline ml-2 ' />

                </Link>
                </div>
              </div>
              <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:mt-24 mt-16'>
            <Image src='https://lautarolazzeri.vercel.app/images/sicars.jpg'
              width={200} height={100} layout='responsive' className='rounded-md'
              alt='Sicars eventos'
            />
            <div>
              <div className='mt-4 flex justify-between items-center flex-wrap'>
                <h3 className='md:text-2xl text-xl font-title'>Sicars Eventos</h3>
                <div className='mt-4 mb-2'>
                <Link href='/' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                <Link href='https://sicars.vercel.app'  target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                    Preview
                  <FaArrowRight className='inline ml-2 ' />

                </Link>
                </div>
              </div>
              <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiFirebase className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 w-full flex justify-center text-center'>
          <Link href='/' target='_blank'>
            <button className=' bg-gray-300 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
              View all projects
            </button>
          </Link>
        </div>

        <div className='md:mt-40 mt-56 flex justify-center items-center flex-col'>
          <hr className='bg-[#636d728d] h-px w-full my-8 border-0 ' />
          <div className='md:mx-36 mx-8 lg:-mt-24 -mt-52 md:-mt-40 py-8 px-8 md:px-14 bg-[#181e27] border-2 border-[#636d725f]'>
            <h2 className='text-2xl font-title'>Un poco sobre mí</h2>
            <p className='font-title text-gray-400 mt-3 mb-6'>Soy desarrollador de Software autónomo, siempre he adquirido conocimientos por mi cuenta, leyendo, realizando cursos, practicando, trabajando. <br /> Mi experiencia en diversos lenguajes y mi enfoque en la resolución creativa de problemas para ofrecer el mejor servicio me destacan en el ámbito. Entregué varios proyectos exitosos de manera independiente, demostrando mi autodisciplina y habilidades de gestión de proyectos. <br /> Siempre estoy preparado para conocer nuevas tecnologías y mantenerme actualizado. Mi compromiso con la mejora contínua me compromete a tener conocimiento de las últimas tecnologías y sus beneficios. <br /> Estoy emocionado por la oportunidad de contribuir a su equipo y llevar mi pasión por la programación al siguiente nivel.</p>
          </div>
        </div>


        <h2 className='md:mx-36 mx-8 mt-20 text-3xl mb-12 font-title'>Tecnologías utilizadas</h2>
        <div className='md:mx-36 mx-8 md:grid flex items-center flex-wrap justify-center lg:grid-cols-4 md:grid-cols-3'>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
              <AiOutlineHtml5 className='h-14 w-14 duration-150' />
              <p className='mt-2'>HTML</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <DiCss3 className='h-14 w-14 duration-150' />
              <p className='mt-2'>CSS3</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <SiTailwindcss className='h-14 w-14 duration-150' />
              <p className='mt-2'>Tailwind</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <BiLogoJavascript className='h-14 w-14 duration-150' />
              <p className='mt-2'>Javascript</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <FaReact className='h-14 w-14 duration-150' />
              <p className='mt-2'>React</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <SiTypescript className='h-10 w-10 duration-150' />
              <p className='mt-2'>Typescript</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <TbBrandNextjs className='h-14 w-14 duration-150' />
              <p className='mt-2'>Next Js</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <BiLogoFlutter className='h-14 w-14 duration-150' />
              <p className='mt-2'>Flutter</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <SiDart className='h-12 w-12 duration-150' />
              <p className='mt-2'>Dart</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <BiLogoWordpress className='h-14 w-14 duration-150' />
              <p className='mt-2'>Wordpress</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <SiSvelte className='h-14 w-14 duration-150' />
            <p className='mt-2'>Svelte</p>
            </div>
          </div>




        <h2 className='md:mx-36 mx-8 mt-20 text-3xl mb-12 font-title'>Algunas Herramientas</h2>
        <div className='md:mx-36 mx-8 md:grid flex items-center flex-wrap justify-center lg:grid-cols-5 md:grid-cols-3'>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <BiGitBranch className='h-14 w-14 duration-150' />
            <p className='mt-2'>Git</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <AiFillGithub className='h-14 w-14 duration-150' />
            <p className='mt-2'>Github</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <AiFillGitlab className='h-14 w-14 duration-150' />
            <p className='mt-2'>Gitlab</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <DiScrum className='h-14 w-14 duration-150' />
            <p className='mt-2'>Scrum</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <FiFigma className='h-14 w-14 duration-150' />
            <p className='mt-2'>Figma</p>
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

        </div>
    </div>




  )
}