import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className='mt-24 flex border-t-2 bg-[#00000044] border-[#636d726d] text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. Lautaro Lazzeri</p>
      <div className='flex items-center mt-8 mb-8'>
              <Link href='/'><FiInstagram       className='text-gray-400 hover:text-white duration-150 h-8 w-8' /> </Link>
              <Link href='/'><AiOutlineLinkedin className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='/'><AiOutlineGithub   className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
              <Link href='/'><HiOutlineMail     className='text-gray-400 hover:text-white duration-150 h-8 w-8 ml-3' /> </Link>
            </div>

    </footer>
  )
}