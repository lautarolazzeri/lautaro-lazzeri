import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import {RxVercelLogo} from 'react-icons/rx'
import { FiFigma } from "react-icons/fi";
import Image from 'next/image'


export default function MetodosilvaPage() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Página oficial del Método Silva Argentina</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://elmetodosilva.com.ar' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar El Método Silva</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Css3</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Figma</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Seo</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <TbSeo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>
        Diseñar y desarrollar la aplicación de cursos del Método Silva fue un emocionante viaje hacia el bienestar y el crecimiento personal. El principal enfoque fué crear una experiencia digital que mostrara los beneficios y la efectividad del método.
        <br /><br />
        La interfaz de usuario fue creada de manera intuitiva con colores semejantes a su logo para crear simetría y además proporcionar una navegación sin esfuerzo, para que los usuarios puedan leer toda la información sin distracciones mayores, ya que el principal público objetivo son gente mayor.
        <br /><br />
        En cuanto al desarrollo, la principal idea era que la aplicación ofreciera una amplia gama de contenido enriquecedor, desde información básica sobre el método, hasta el ¿Por qué el método?. Además, la aplicación cuenta con una sección donde mensualmente se editan las fechas de los próximos cursos a realizarse.
        </p>
        <Image src='/metodosilva.jpg' width={500} height={300} alt='metodosilva' className='mt-5 strange-padding' />
      </div>
  </div>

  <footer className='flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
    </footer>



  </div>



    </>
  )
}