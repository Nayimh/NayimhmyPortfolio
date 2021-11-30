import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import img from '../../../Image/NayimHasan.png'
const Banner = () => {
    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    return (
        <div id="home" className="min-h-screen flex items-center justify-center pb-10 mx-auto" style={{ background: '#000000' }}>
            <div data-aos='fade-down' data-aos-duration='1800' className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto">
            <div className="w-full md:w-2/5">
            <img className="rounded-full" src={img} alt=""  effect="blur"/>
            </div>
            <div className='text-white mt-10'>
                    <h1 className="text-5xl text-center text-red-500 font-bold">Nayim Hasan</h1>
                    <h3 className="text-2xl font-bold animate-pulse text-gray-500 my-5">Jr. Web Developer | React Developer</h3>
                    <div className="text-center">
                    <a href="
https://drive.google.com/uc?export=download&id=1FWwg2caSMlpjH0lWpnbVNlWaLFmTcqbN" download> <button className="bg-red-600 py-1 px-4 rounded-sm mt-6 animate-bounce">  Resume</button></a> 
                     <a href="#contactme"><button className="bg-red-600 py-1 px-4 rounded-sm mt-6 animate-bounce ml-5">  Contact Me </button></a></div>
                </div>
                </div>
        </div>
    );
};

export default Banner;