import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    return (
        <div>
            <Banner />
            <div data-aos='fade-up' data-aos-duration='2100'>
                    <Projects/>
           
            </div>
            <div data-aos='fade-right' data-aos-duration='1800'>
                    <About/>
           
            </div>
            <div data-aos='fade-down' data-aos-duration='2100'>

            <Skills />
            </div>
            <div data-aos='fade-up-left' data-aos-duration='1500'>

            <Contact/>
            </div>
        </div>
    );
};

export default Home;