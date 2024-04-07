// import navImg from '../../assets/navigation-bar.svg'
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const path = pathname.split('/')[1]
  return (
    <div className="rounded-md bg-gray-800 text-white flex justify-between">
      <button className="font-bold text-xl">Portfolio.</button>
      <div className="hidden sm:block space-x-8">
        <Link href='/' className={(path === '' ? 'text-cyan-400' : '') + ' font-semibold'} >Home</Link>
        <Link href="/about" className={(path === 'about' ? 'text-cyan-400' : '') + ' font-semibold'} >About</Link>
        <Link href="/projects" className={(path === 'projects' ? 'text-cyan-400' : '') + ' font-semibold'} >Projects</Link>
      </div>
      <div className='sm:hidden'>
        <img className='w-8 invert' src="/images/navigation-bar.svg" />
      </div>
    </div>
  );
};

export default Navbar;
