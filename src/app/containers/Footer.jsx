import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 flex h-56 w-full flex-col items-center justify-center border-t-2 border-[#636d726d] bg-[#00000044] text-center">
      <p>© {year}. Lautaro Lazzeri</p>
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
    </footer>
  );
}