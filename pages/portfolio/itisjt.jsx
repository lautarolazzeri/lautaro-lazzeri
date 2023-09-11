import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Footer from '../../src/app/containers/Footer'
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
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://seguridad-itisjt.vercel.app' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar Seguridad Informática Itjst</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Html</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Javascript</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Css3</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <AiOutlineHtml5 className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>

          Éste sitio fue uno de los primeros que realice, junto a 3 compañeros con la finalidad de mostrar todos los tipos de MALWARES/VIRUS existentes y su correcta forma para evitar estos ataques a nuestro sistema, este proyecto fué para la materia de Seguridad Informática en el Instituto Técnico San Judas Tadeo. Secundaria Técnica en Informática donde finalicé mis estudios.
          <br /><br />
          La página web incluye un juego de preguntas y respuestas para que el usuario pueda poner a prueba sus conocimientos sobre los temas aprendidos previamente en el sitio.
          <br /><br />
          Este fue desarrollado con Html, Css y Javascript, y se encuentra alojado en Vercel. Podés jugar al juego de preguntas y respuestas en el siguiente link:  <a href='https://seguridad-itisjt.vercel.app/juego.html' className='text-blue-400'>Juego de preguntas y respuestas</a>

        </p>
        <Image src='/seguridad.png' width={500} height={300} alt='Seguridad informatica' className='mt-5 strange-padding' />
      </div>
  </div>


  </div>

  <Footer />


    </>
  )
}