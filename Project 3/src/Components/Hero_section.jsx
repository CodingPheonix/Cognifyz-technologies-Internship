import React from 'react'
import './Hero_section.css'

const Hero_section = () => {
    return (
        <>
            <section id="hero_section" className="md:h-[calc(100vh+57px)] flex md:flex-row flex-col justify-around items-center md:p-10 pt-20">
                <div className="md:w-1/2 text-left p-7 flex flex-col gap-7">
                    <h1 id='hero_text_1' className="text-5xl font-bold">Advanced CSS Styling and <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Responsive</span> Design</h1>
                    <p id='hero_text_2'>This page serves as a comprehensive demonstration of the importance, functionality, and versatility of responsive web design, showcasing how it ensures seamless adaptability and an enhanced user experience across various devices and screen sizes.</p>
                    <a id='hero_text_3' href="#crew"><button className="text-left flex gap-2 px-4 py-2 rounded-full text-white bg-blue-700 active:bg-blue-800 text-lg hover:scale-110 hover:underline transition-all duration-150 ease-in-out">Let’s Explore <img className="h-7" src="../public/icons8-right-50.png" alt="Right-arrow" /></button></a>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <img id='hero_image' className="h-72 rounded-2xl" src="../public/is_web_development_good_career.avif" alt="Going Merry" />
                </div>
            </section>
        </>
    )
}

export default Hero_section
