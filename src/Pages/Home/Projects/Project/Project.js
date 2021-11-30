import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { img,  name,  live, git, id } = props.project;
    return (
        <div className="w-10/12 mx-auto my-2 shadow-2xl">
        <div className='rounded shadow-lg '>
            <img className='w-full' src={img} alt="" />
        </div>
        <div className='px-6 py-10 text-gray-400'>
            <div className='font-bold text-xl mb-3'>
                Name: {name}
            </div>
            {/* <p>{ description }</p> */}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 px-6 py-4 mx-auto'>
            <span ><a target="_blank" rel="noreferrer" href={live}><button className='px-5 py-0 bg-red-500 rounded text-white font-semibold'>Live</button></a></span>
            <span ><a target="_blank" rel="noreferrer" href={git}><button className='px-5 py-0 bg-red-500 rounded text-white font-semibold'>GigHub</button></a></span>
            <span >
                <Link to={`/details/${id}`}><button className='px-5 py-0 bg-red-500 rounded text-white font-semibold'>Details</button></Link>
                </span>
        </div>
    </div>
    );
};

export default Project;