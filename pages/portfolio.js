import '../src/app/globals.css'
import ParticlesBackground from '../src/app/components/ParticlesBackground'
import { FiArrowLeft, FiInstagram } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

import { BiLogoCss3 } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { TbSeo } from 'react-icons/tb'
import { DiFirebase } from 'react-icons/di'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'


import { BiGitBranch } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGitlab } from 'react-icons/ai'
import { DiScrum, DiJava } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { RxVercelLogo } from 'react-icons/rx'
import Footer from '../src/app/containers/Footer'
import ProjectCard from '../src/app/components/ProjectCard'

import { projects } from "../data/projects";



export default function Portfolio() {
  return (
    <>
      <ParticlesBackground />
      <button
        type="button"
        onClick={() => window.history.back()}
        className="flex mt-8 mx-8 items-center gap-2 text-sm text-gray-400 duration-150 hover:text-white"
      >
        <FiArrowLeft className="h-4 w-4" /> Volver atrás
      </button>
      <div className='md:mx-36 mx-8 '>
        <div className='mx-8 gap-8 mt-20 text-center'>
          <h1 className='md:text-5xl text-2xl mb-12'>Proyectos que he realizado</h1>
        </div>

        <div className="mx-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mx-36">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className='mt-16 w-full flex justify-center text-center'>
          <Link href='https://github.com/lautarolazzeri' target='_blank'>
            <button className=' bg-gray-300 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
              Ver más en Github
            </button>
          </Link>
        </div>
      </div>

      <Footer />


    </ >
  );
}