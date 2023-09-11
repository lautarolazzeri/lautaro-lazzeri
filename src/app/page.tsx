'use client'

import ParticlesBackground from './components/ParticlesBackground'
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