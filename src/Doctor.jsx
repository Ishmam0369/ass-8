import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div>
            <img src="../B11A08-router-warrior/C001-assets/doctor-sample.png" alt="" />
            <div>
                <p className='text-black'>available</p>
                <p className='text-black'>{doctor.experience} of experience</p>
            </div>
            <div>
                <p className='text-black'>{doctor.name}</p>
            </div>
            <div>
                <p className='text-black'>{doctor.education}</p>
                <p className='text-black'>{doctor.registration_number}</p>
            </div>
            <div>
                <button className='btn text-blue-500 bg-white '>View Details</button>
            </div>
        </div>
    );
};

export default Doctor;