import '../../src/app/globals.css'
import ParticlesBackground from '../../src/app/components/ParticlesBackground'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'

export default function MetodosilvaPage() {
  return (
    <>
      <ParticlesBackground />

      <div className='md:mx-36 mx-8 mt-24'>
        <h3 className='text-5xl'>Página oficial del Método Silva Argentina</h3>
        <div className="flex mt-20">
            <div className='w-full'>
              <div className='py-8 border-t-2 border-[#636d726d]'>
                <Link href='https://elmetodosilva.com.ar'>
                <div className='flex items-center'>
                  <p>Visitar El Método Silva</p>
                  <FiArrowUpRight className='ml-2' />
                </div>
              </Link>
              </div>

              <div className='py-8 border-t-2 border-[#636d726d]'>
                  <h4 className='font-bold text-xl'>Sector</h4>
                  <p className='text-[#ffffff6d]'>Diseño y desarrollo</p>
              </div>
            </div>
            <div className='ml-8'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam impedit incidunt quisquam ab. Tempore ipsa tempora facilis magnam unde vero! Consequuntur laborum rerum magnam, reiciendis deserunt sed corporis nam dolorum molestias eveniet eius culpa ipsum vitae alias ratione tenetur. Fuga, consequatur tempore? Cum, quia?</p>
            </div>
        </div>





        </div>


    </>
  )
}