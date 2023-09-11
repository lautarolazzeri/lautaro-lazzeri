import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  return (
    <div id='header' className='h-[93vh] flex justify-center flex-col items-start md:mx-36 mx-8'>
        <div className='flex flex-col md:flex-row md:justify-between w-full mt-8'>
          <div>
            <h1 className='text-5xl font-title'>Lautaro Sebastian Lazzeri</h1>
            <div className='flex items-center mt-8 mb-8'>
              <Link href='https://www.instagram.com/lautarolazzeri' target="_blank"><FiInstagram       className='text-gray-400 hover:text-white duration-150 h-8 w-8' /> </Link>
              <Link href='https://www.linkedin.com/in/lautaro-lazzeri/' target="_blank"><AiOutlineLinkedin className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='https://www.github.com/lautarolazzeri' target="_blank"><AiOutlineGithub   className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='mailto:lautyylazzerii@gmail.com'><HiOutlineMail     className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
            </div>
          </div>
          <div className='md:ml-8 '>
            <h2 className='text-3xl font-title md:w-72 '>Front-end Web and Mobile Developer </h2>
            <p className='md:w-72 mt-8 text-gray-400'>¡Bienvenido! Soy un desarrollador autónomo con un enfoque único en la creatividad y la excelencia. Descubre un poco sobre mi, mi trayectoria y proyectos innovadores</p>
          </div>
        </div>
      </div>
  );
}