import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('Portfolio.json')
            .then(res => res.json())
            .then(dt => setProjects(dt))
    }, []);
    return (
        <div id="project" className="min-h-screen mt-10">
            <p className="text-center font-bold text-4xl bg-gray-300 p-10 text-red-500 rounded-xl shadow-lg">My Projects</p>
            {/* cards */}
            <div className='mt-10 grid grid-cols-1  lg:grid-cols-3 md:gap-6 justify-items-center shadow-2xl bg-black'>
            {
                projects.map(project => <Project
                    key={project.id}
                    project={project}
                ></Project>)
                }
                </div>
        </div>
    );
};

export default Projects;