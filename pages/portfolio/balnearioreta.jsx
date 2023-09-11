import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Footer from '../../src/app/containers/Footer'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import {RxVercelLogo} from 'react-icons/rx'
import { FiFigma } from "react-icons/fi";
import Image from 'next/image'


export default function BalnearioReta() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Página oficial de Balneario Reta</h3>
  <div className="md:flex-row flex flex-col mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://balnearioretaoficial.com.ar' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar Balneario Reta</p>
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

        Diseñar y desarrollar la aplicación sobre Balneario Reta ha sido un emocionante desafío y un proyecto personal muy valioso. La aplicación busca brindar a los visitantes y locales una experiencia única al explorar este hermoso destino costero en la costa argentina.
        <br /><br />
        El proceso de diseño se centró en la facilidad de uso y la accesibilidad. Se quería asegurar de que los usuarios puedan navegar de manera sencilla y intuitiva asi poder encontrar la información que necesitan sobre alojamiento, actividades, atracciones, servicios y eventos en Balneario Reta. El diseño es limpio y atractivo, con una interfaz amigable que refleja la belleza del entorno.
        <br /><br />
        En cuanto al desarrollo, se ha utilizado tecnologías para garantizar un rendimiento óptimo y una experiencia sin problemas. La aplicación por supuesto está disponible tanto en celulares, tablets y computadoras.
        </p>
        <Image src='/reta.jpg' width={500} height={300} alt='balneario reta' className='mt-5 strange-padding' />
      </div>
  </div>




  </div>


    <Footer />

    </>
  )
}