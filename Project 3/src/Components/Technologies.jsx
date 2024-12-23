import React from 'react'

const Technologies = () => {
  return (
    <section id="Technologies" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-10">Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">HTML (HyperText Markup Language)</h3>
                    <p>The standard language for creating and structuring content on the web, such as text, images, and links</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">CSS (Cascading Style Sheets)</h3>
                    <p>A stylesheet language used to style and layout web pages, including design, colors, and fonts.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                    <p>A scripting language that enables dynamic behavior on websites, allowing interaction with users and updating content in real time.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">React</h3>
                    <p>A JavaScript library for building user interfaces, particularly for single-page applications with reusable components.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">Node.js</h3>
                    <p>A server-side JavaScript runtime that allows developers to build scalable and high-performance web applications.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">Bootstrap</h3>
                    <p>A front-end framework that provides pre-built responsive design components and utilities for faster development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Technologies
