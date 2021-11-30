import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <div data-aos='fade-down' data-aos-duration='800'>
                    <Projects/>
           
            </div>
            <div data-aos='fade-down' data-aos-duration='800'>
                    <About/>
           
            </div>
            <Skills />
            <Contact/>
        </div>
    );
};

export default Home;