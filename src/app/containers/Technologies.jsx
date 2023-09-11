import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoFlutter, BiLogoJavascript, BiLogoWordpress } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiDart, SiSvelte, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiFirebase } from 'react-icons/di'

export default function Technologies() {
  return (
    <>
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

              <SiTypescript className='h-14 w-14 duration-150' />
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

              <SiDart className='h-14 w-14 duration-150' />
              <p className='mt-2'>Dart</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>

              <BiLogoWordpress className='h-14 w-14 duration-150' />
              <p className='mt-2'>Wordpress</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <DiFirebase className='h-14 w-14 duration-150' />
            <p className='mt-2'>Firebase / Sql</p>
            </div>
            <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <SiSvelte className='h-14 w-14 duration-150' />
            <p className='mt-2'>Svelte</p>
            </div>
          </div>

    </>
  )
}