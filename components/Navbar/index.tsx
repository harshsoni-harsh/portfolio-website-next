// import navImg from '../../assets/navigation-bar.svg'
'use client'

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between sticky top-0 z-10 w-full py-2">
      <button className="font-bold text-xl">Portfolio.</button>
      <div className="hidden sm:block space-x-8 [&>*]:font-semibold">
        <Link href='#'  >Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
      </div>
      <div className='sm:hidden'>
        <Image className='w-8 invert' alt="sidenav-button" src="/images/navigation-bar.svg" height={24} width={24} />
      </div>
    </div>
  );
};

export default Navbar;
