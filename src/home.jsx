import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import Doctor from './Doctor';

const Home = () => {
 
  const [doctors,setdoctors] =useState([])

  
  useEffect(()=>{
    fetch("Doctor.json")
    .then(res=>res.json())
    .then(data=>setdoctors(data))
  },[])
  
  return (
        <div>
            <div className=' bg-white py-10 mx-18 rounded-xl b-2
          main-banner border-blue-100 border-6'>
          <div>
          <div className='mx-20 '>
          <p className='font-bold text-5xl tracking-wide mt-10 tracking-wide mx-20 text-black text-center'>Dependable Care, Backed by Trusted Professionals.</p>
          <p className='text-black mt-3 tracking-wide mx-18'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
          <div className='mx-60 mt-7 flex gap-10'>
            <input className='bg-blue-100 pl-10 pr-50 rounded-xl text-xl py-1 text-black' type="search" name="search" id="" placeholder='Search Any Doctor...'/>
            <input className='bg-blue-600 rounded-2xl px-6 py-1 text-white font-semibold text-xl' type="submit" value="Search" />
          </div>
          </div>
            <div className='flex gap-10 justify-around my-10 '>
            <img className='w-[600px]' src="../B11A08-router-warrior/C001-assets/banner-img-1.png" alt="" />
            <img className='w-[600px]' src="../B11A08-router-warrior/C001-assets/banner-img-1.png" alt="" />
            </div>


          </div>
            </div>

            {/* best doctor */}

            <div className='px-30 my-10 '>
            <p className='text-5xl font-bold text-black text-center'>Our Best Doctors</p>
            <p className='text-black text-center text-lg py-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

              <div>
                {doctors.map(doctor=><Doctor key={doctor.speciality} doctor={doctor}></Doctor>)}
              </div>
            <div>

            </div>
            </div>
        </div>
        
    );
};

export default Home;