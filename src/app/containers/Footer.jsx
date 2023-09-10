import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mt-24 flex text-center justify-center flex-col items-center h-56 w-full'>
      <p>© 2023. All rights reserved. Lautaro Lazzeri</p>
      <Link href='#header'>
        <button className=' bg-gray-300 mt-4 text-[#151a22] hover:bg-white duration-150 font-medium px-6 py-3 rounded-xl'>
          Scroll to top
        </button>
      </Link>
    </footer>
  )
}