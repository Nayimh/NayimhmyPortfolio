import React from 'react';
import image from '../../../Image/NayimHasan.png'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const About = () => {
    return (
        <>
        <p className="text-center py-8 font-bold text-3xl bg-gray-700 text-white rounded-lg mb-7 mt-16">About Me</p>
    <div className='w-full'>
        {/* max-w-xs */}
        <div className='flex flex-col justify-center w-10/12  bg-white shadow-xl rounded-xl p-5 mx-auto'>
            <div className=''>
                <img className='w-32 mx-auto rounded-full shadow-sm drop-shadow-sm' src={image} alt="Profile img" />
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-xl sm:text-2xl text-red-500 font-bold'>Nayim Hasan</h2>
                <p className='text-xs sm:text-base text-gray-900 pt-2 bp-4 px-5 font-medium  w-auto inline-block border-b-2'>Jr Web Developer / React Developer</p>
               
                    
                <p className="text-center text-base md:text-2xl text-gray-700 my-2">I am junior Web Developer. I love develope websites with ReactJs also familiar with MongoDB, Nodejs, and express. Currently, I'm exploring for a right job or intenrship opportunity. The aim behind looking for a job is to improve my initial Web developing knowledge to become an expert full-stack developer by contributing to company growth and working with professionals and experts.</p>
                    <hr />
                    <div className='flex align-center justify-center mt-4'>
                        
                        

                <a  href="https://github.com/Nayimh" target="_blank"  className="text-xl text-gray-800 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer" >
                    <FaGithub />
                    
                    <span className='sr-only'>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nayim-hasan/" target="_blank" className="text-xl text-blue-900 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer">
                    <FaLinkedin />
                    
                    <span className='sr-only'>LinkedIn</span>
                </a>
                <a href="mailto:hnaim6979@gmail.com" className="text-xl text-gray-900 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer">
                    <FaEnvelope />
                    
                    <span className='sr-only'>Email</span>
                </a>
                </div>
               
            </div>
            
        </div>
        </div>
        </>
    );
};

export default About;