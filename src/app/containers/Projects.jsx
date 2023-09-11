import Image from "next/image";
import Link from "next/link";
import { BiLogoCss3 } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import { FaArrowRight } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";

export default function Projects() {
  return (
    <>
    <h2 className='md:mx-36 mx-8 mt-12 text-3xl mb-12 font-title'>Algunos proyectos</h2>
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
                <Link href='/portfolio/metodosilva' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
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
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
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
                <Link href='/portfolio/balnearioreta' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
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
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
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
                <Link href='/portfolio/lamerlina' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
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
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
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
                <Link href='/portfolio/sicars' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
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
                <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
              </div>
            </div>
          </div>

          <div className='md:-mt-40'>
              <Image src='https://lautarolazzeri.vercel.app/images/seguridad.PNG'
                width={200} height={100} layout='responsive' className='rounded-md'
                alt='Seguridad Informática'
              />
              <div>
                <div className='mt-4 flex justify-between items-center flex-wrap'>
                  <h3 className='md:text-2xl text-xl font-title'>Seguridad Informática</h3>
                  <div className='mt-4 mb-2'>
                    <Link href='/portfolio/itisjt' className='text-gray-300 mt-4 duration-150 hover:text-white'>+ Info</Link>
                    <Link href='https://sicars.vercel.app' target='_blank' className='ml-8 mt-4 bg-[#394552] px-6 py-3 hover:bg-[#2c343c] duration-150 rounded-xl'>
                      Preview
                      <FaArrowRight className='inline ml-2 ' />
                    </Link>
                  </div>
                </div>
                <div className='mt-2 flex'>
                  <TbBrandNextjs className='h-10 w-10 text-gray-400 duration-150 hover:text-white' />
                  <BiLogoCss3 className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                  <FiFigma className='h-10 w-10 ml-2 text-gray-400 duration-150 hover:text-white' />
                </div>
              </div>
            </div>
        </div>


        <div className='mt-16 w-full flex justify-center text-center'>
          <Link href='/portfolio'>
            <button className=' bg-gray-300 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
              View all projects
            </button>
          </Link>
        </div>

    </>
  )
}