import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between sticky top-0 z-20 w-full py-2 max-sm:justify-center opacity-100 rounded-b p-2 px-8">
      <button className="font-bold text-xl max-sm:hidden">Portfolio.</button>
      <div className="space-x-8 [&>*]:font-semibold">
        <Link href='#'>Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
