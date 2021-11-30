import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import SingleDetails from '../Singledetails/SingleDetails';
import './Details.css'

const Details = () => {
    const { projectId } = useParams();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('Portfolio.json')
            .then(res => res.json())
            .then(dt => setProjects(dt))
    }, []);

    return (
       
        <div id="detail" className="min-h-full">
          
            <h1 className="text-center font-bold text-4xl bg-gray-300 p-10 text-red-500 rounded-xl shadow-lg">This is id {projectId}</h1>
            <div className='mt-10  grid grid-cols-1  justify-items-center shadow-2xl bg-black'>
            {
                projects.map(project => <SingleDetails
                    key={project.id}
                    project={project}
                ></SingleDetails>)
                }
                </div>
               
            </div>
        
    );
};

export default Details;