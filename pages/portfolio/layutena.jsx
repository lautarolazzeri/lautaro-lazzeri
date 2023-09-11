import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import {RxVercelLogo} from 'react-icons/rx'
import { FiFigma } from "react-icons/fi";
import Image from 'next/image'
import { BiLogoWordpress } from 'react-icons/bi'


export default function LaYutena() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Empresa de viajes La Yuteña</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://viajes-paraguay-layutena.com/' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar La Yuteña</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Wordpress</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Css3</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Seo</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Figma</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <BiLogoWordpress className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>

          La Yuteña - Guaireña es una empresa de viajes en micro que se dedica a realizar viajes al norte y principalmente a Paraguay, entre otras rutas y destinos. El sitio web fue desarrollado en Wordpress y se utilizó el plugin Elementor para la maquetación. El diseño fue realizado previamente en Figma y luego se pasó a código con Wordpress y CSS, utilizando y modificando los widgets de Elementor.

        </p>
        <Image src='/yutena.jpg' width={500} height={300} alt='La Yuteña' className='mt-5 strange-padding'  />
      </div>
  </div>

  <footer className='flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
    </footer>



  </div>



    </>
  )
}