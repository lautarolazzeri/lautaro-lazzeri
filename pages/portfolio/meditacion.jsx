import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import {RxVercelLogo} from 'react-icons/rx'
import { FiFigma } from "react-icons/fi";
import Image from 'next/image'
import { SiSvelte } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { SiTailwindcss } from 'react-icons/si'


export default function Meditacion() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Página web de meditación (En progreso)</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://meditationweb.vercel.app/' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar web de Meditación</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Svelte</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Javascript</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Tailwind Css</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Seo</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Figma</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <SiSvelte className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <SiTailwindcss className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>

        Este proyecto se centró en crear un espacio digital que inspire serenidad y facilite la práctica de la meditación para los usuarios. Aquí se destacan algunos aspectos clave de este exitoso desarrollo:
        <br /><br />
        El diseño se enfocó en la creación de una estética visual que transmite calma y serenidad. Se utilizaron colores suaves y una estética minimalista para reflejar la naturaleza pacífica de la meditación. Además se implementó una navegación sencilla y fácil de usar. Los usuarios podrán acceder sin esfuerzo a diversas meditaciones y recursos a través de un menú claro. Los botones de reproducción y pausa se destacarán para una experiencia de usuario óptima.
        <br /><br />
        La página ofrecerá una amplia gama de meditaciones guiadas de alta calidad. Los usuarios pueden elegir la duración y el tema que mejor se adapte a sus necesidades, y disfrutar de una experiencia de meditación enriquecedora.
        <br /><br />
        Actualmente se encuentra en etapa de desarrollo, pero se puede acceder a los avances en el link de arriba a la izquierda.
        </p>
        <Image src='/meditation.jpg' width={500} height={300} alt='meditacion' className='mt-5 strange-padding' />
      </div>
  </div>

    <footer className='flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
    </footer>



  </div>



    </>
  )
}