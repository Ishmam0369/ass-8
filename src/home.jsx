import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='px-24 bg-amber-50'>
          <div>
          <div className='mx-30'>
          <p className='font-bold text-5xl tracking-wide mt-10 text-black text-center'>Dependable Care, Backed by Trusted Professionals.</p>
          <p className='text-black mt-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
          <div className='b-2'>
            <input type="search" name="search" id="" placeholder='Search Any Doctor...'/>
            <input type="submit" value="Search" />
          </div>
          </div>



          </div>
            
        </div>
        
    );
};

export default Home;