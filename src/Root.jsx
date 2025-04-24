import React from 'react';
import { Outlet } from 'react-router';
import Home from './home';
import { NavLink } from 'react-router';

const Root = () => {
    return (
        <div className='px-24 bg-amber-50'>
           <header className='py-5 bg-amber-50'>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <div className='flex gap-2'>
        <img src="../B11A08-router-warrior/C001-assets/logo.png" alt="" />
        <h1 className='mt-2 text-2xl text-black font-medium '>Phudu</h1>
    </div>
  </div>
  <div className="navbar-center text-black flex gap-10">
    <NavLink to={`/Home`}>Home</NavLink>
    <NavLink to={`/MyBooking`}>My-Bookings</NavLink>
    <NavLink to={`/Blogs`}>Blogs</NavLink>
    <NavLink >Contact-Us</NavLink>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary bg-blue-600 rounded-3xl">Emergency</a>
  </div>
</div>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;