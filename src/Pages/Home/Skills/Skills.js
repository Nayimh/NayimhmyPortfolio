import React from 'react';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMaterialui, SiFirebase, SiMongodb, SiExpress,  } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { DiCss3 } from 'react-icons/di';
const Skills = () => {
    return (
        <div  className="max-w-6xl mx-auto justify-center py-12" id='tech'>
        <p className="text-2xl text-center text-white bg-red-500 sm:text-4xl font-bold  rounded-xl py-6">My Skills</p>
        <p className="text-xl text-center text-red-600 sm:text-2xl font-bold pt-4">Comfortable With</p>
        <div className="flex flex-wrap justify-center pt-2">
            <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaReact color="#094d48" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Reactjs</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-50 shadow-2xl rounded-xl sm:w-52">
                <SiJavascript color="#fccb00" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">JavaScript</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <ImHtmlFive color="#db3e00" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">HTML5</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <DiCss3 color="#0693e3" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">CSS3</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiTailwindcss color="#03a9f4" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwind</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaBootstrap color="#9900ef" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Bootstrap</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiMaterialui color="#00bcd4" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">MUI</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiFirebase color="#ff9800" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">FireBase</p>
            </div>
            
        </div>
        <p className="text-xl text-center text-red-500 sm:text-2xl font-bold pt-8">Familiar With</p>
        <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiMongodb color="#163d2a" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">MongoDB</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaNode color="#0c4629" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">NodeJs</p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiExpress color="#1a3851" className="mx-auto text-5xl " />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">ExpressJs</p>
            </div>
        </div>
    </div>
    );
};

export default Skills;