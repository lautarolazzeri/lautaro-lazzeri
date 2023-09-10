import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

export default function Tools() {
  return (
    <>
    <h2 className='md:mx-36 mx-8 mt-20 text-3xl mb-12 font-title'>Algunas Herramientas</h2>
        <div className='md:mx-36 mx-8 md:grid flex items-center flex-wrap justify-center lg:grid-cols-5 md:grid-cols-3'>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <BiGitBranch className='h-14 w-14 duration-150' />
            <p className='mt-2'>Git</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <AiFillGithub className='h-14 w-14 duration-150' />
            <p className='mt-2'>Github</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <AiFillGitlab className='h-14 w-14 duration-150' />
            <p className='mt-2'>Gitlab</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <DiScrum className='h-14 w-14 duration-150' />
            <p className='mt-2'>Scrum</p>
          </div>

          <div className='w-full flex items-center px-3 py-8 gap-4 border-l-2 border-[#636d72] hover:border-l-2 hover:border-[#5477ff] duration-100 hover:text-white text-gray-400 '>
            <FiFigma className='h-14 w-14 duration-150' />
            <p className='mt-2'>Figma</p>
          </div>
        </div>
    </>
  )
}