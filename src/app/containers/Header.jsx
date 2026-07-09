import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";

export default function Header() {
  return (
    <div
      id="header"
      className="relative flex h-[93vh] flex-col items-start justify-center md:mx-36 mx-8"
    >
      <div className="mt-8 flex w-full flex-col md:flex-row md:justify-between">
        <div>
          <p className="mb-3 font-title text-sm uppercase tracking-[0.2em] text-gray-500">
            Portafolio
          </p>
          <h1 className="font-title text-5xl">Lautaro Sebastian Lazzeri</h1>
          <div className="mb-8 mt-8 flex items-center">
            <Link href="https://www.instagram.com/lautarolazzeri" target="_blank">
              <FiInstagram className="h-8 w-8 text-gray-400 duration-150 hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/lautaro-lazzeri/" target="_blank">
              <AiOutlineLinkedin className="ml-3 h-8 w-8 text-gray-400 duration-150 hover:text-white" />
            </Link>
            <Link href="https://www.github.com/lautarolazzeri" target="_blank">
              <AiOutlineGithub className="ml-3 h-8 w-8 text-gray-400 duration-150 hover:text-white" />
            </Link>
            <Link href="mailto:lautyylazzerii@gmail.com">
              <HiOutlineMail className="ml-3 h-8 w-8 text-gray-400 duration-150 hover:text-white" />
            </Link>
          </div>
        </div>

        <div className="md:ml-8">
          <h2 className="font-title text-3xl md:w-72">
            Front-end Web &amp; Mobile Developer
          </h2>
          <p className="mt-8 text-gray-400 md:w-72">
            Diseño y construyo interfaces web y mobile prolijas y funcionales.
            Acá abajo tenés algunos de los proyectos en los que trabajé y un poco sobre mi trayectoria.
          </p>
        </div>
      </div>

      <Link
        href="#content"
        aria-label="Ir a proyectos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 duration-150 hover:text-white animate-bounce"
      >
        <BsArrowDown className="h-6 w-6" />
      </Link>
    </div>
  );
}