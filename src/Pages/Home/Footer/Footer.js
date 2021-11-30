import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
             <div className="py-5 mt-32 border-t-3/2 bg-gray-900">
            <div className="flex justify-center mt-4">
            <a href="https://github.com/Nayimh" target="_blank" rel="noreferrer" className="text-xl text-gray-800 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer bg-white">
                        <FaGithub />
                        
                    <span className='sr-only'>GitHub</span>
                    
                    </a>
                    <a href="https://www.linkedin.com/in/nayim-hasan/" target="_blank" rel="noreferrer" className="text-xl text-blue-900 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer bg-white">
                        <FaLinkedin />
                        
                        <span className='sr-only'>LinkedIn</span>
                    </a>
                    <a href="mailto:hnaim6979@gmail.com" className="text-xl text-gray-900 hover:bg-gray-400 rounded-full p-2 m-1 cursor-pointer bg-white">
                        <FaEnvelope/>
                        
                        <span className='sr-only'>Email</span>
                </a>
                </div>
                <div className="flex justify-center mt-4">
                    <p className=" mb-4 text-white font-bold">©Copyright by Nayim Hasan</p>
                </div>
           
        </div>
        </div>
    );
};

export default Footer;