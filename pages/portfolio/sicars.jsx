import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import {RxVercelLogo} from 'react-icons/rx'
import Image from 'next/image'
import { BiLogoJavascript } from 'react-icons/bi'
import { DiFirebase } from 'react-icons/di'


export default function Sicars() {
  return (
    <>
  <ParticlesBackground />

<div className='md:mx-36 mx-8 mt-24'>
  <h3 className='md:text-5xl text-2xl'>Sicars Eventos</h3>
  <div className="md:flex-row flex flex-col  mt-20">
      <div className='w-full'>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
          <Link href='https://sicars.vercel.app' target='_blank'>
          <div className='flex items-center'>
            <p>Visitar Sicars</p>
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
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Javascript</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Css3</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Base de Datos Firebase</p>
            <p className='text-[#ffffff6d] hover:text-white duration-100'>Vercel</p>
        </div>
        <div className='strange-padding border-t-2 border-[#636d726d]'>
            <div className='mt-2 flex'>
                <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                <BiLogoJavascript className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <DiFirebase className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                <RxVercelLogo className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
        </div>
      </div>
      <div className='md:ml-8 nomt'>
        <p>
          Sicars Eventos es una empresa de organización de eventos que se dedica a la organización de eventos sociales y empresariales alquilando vehículos de lujo, clásicos o llamativos. Se utilizó NextJs para el desarrollo de la aplicación, lo que permitió un mejor posicionamiento en los buscadores y una mejor experiencia de usuario.
          <br /><br />
          La aplicación cuenta con una base de datos en Firebase, que permite almacenar los datos de los vehículos para que luego sean importados al proyecto haciéndolo más liviano.
          <br /><br />
          Con un diseño simple y concreto, se logró un sitio web que cumple con los objetivos, que son: dar a conocer los vehículos que ofrece y facilitar el contacto de los clientes.
          <br /><br />
          VEHÍCULOS CLÁSICOS Y EXCLUSIVOS QUE MARCAN LA DIFERENCIA.
        </p>
        <Image src='/sicars.jpg' width={500} height={300} alt='Sicars' className='mt-5 strange-padding' />
      </div>
  </div>

  <footer className='flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
    </footer>



  </div>



    </>
  )
}