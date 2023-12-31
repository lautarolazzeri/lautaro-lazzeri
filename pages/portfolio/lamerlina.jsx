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


export default function LaMerlina() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Página de La Merlina Alquileres</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://complejolamerlina.com.ar' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar complejo La Merlina</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>
        El diseño y desarrollo de la página de La Merlina se centró en brindar a los usuarios una experiencia única al planificar y disfrutar de su estadía en Merlo, San Luis.
        <br /><br />
        La web ofrece una interfaz intuitiva y atractiva que permite a los usuarios explorar fácilmente las cabañas disponibles, obtener información detallada sobre las atracciones turísticas de la zona y reservar su alojamiento de manera conveniente. Posterior al desarrollo se aseguró que la aplicación sea rápida, segura y fácil de usar, brindando a los visitantes de La Merlina Centro una herramienta invaluable para vivir una experiencia inolvidable en este hermoso destino turístico.
        </p>
        <Image src='/ceci.jpg' width={500} height={300} alt='la Merlina' className='mt-5 strange-padding' />
      </div>
  </div>



  </div>

  <Footer />


    </>
  )
}