import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='flex justify-between  items-center max-w-[600px] mx-auto my-6 border-b-2 p-4'>
      <h1 className=' text-2xl text-black font-extrabold '>SANITY</h1>
      <div className="font-medium">
        <Link to='/'>Home</Link>
        <Link to="/create" className=' ml-4 h-8 b border border-black hover:bg-black hover:text-white transition duration-300 p-2 rounded'>New blog</Link>
      </div>
    </div>
  );
}

export default Navbar;