'use client'

import ParticlesBackground from './components/ParticlesBackground'
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
import { BiLogoFlutter } from 'react-icons/bi'
import { SiDart } from 'react-icons/si'
import { BiLogoWordpress } from 'react-icons/bi'
import {SiSvelte} from 'react-icons/si'


import { BiGitBranch } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGitlab } from 'react-icons/ai'
import { DiScrum } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'

import Header from './containers/Header'
import Projects from './containers/Projects'
import About from './containers/About'
import Technologies from './containers/Technologies'
import Tools from './containers/Tools'
import Footer from './containers/Footer'


export default function Home() {
  return (
    <div className=''>
      <ParticlesBackground />

      <Header />


      <div className='relative border-t-2 border-[#636d726d] bg-[#00000020]'>

        <Projects />
        <About />
        <Technologies />

        <Tools />
        <Footer />









        </div>
    </div>




  )
}