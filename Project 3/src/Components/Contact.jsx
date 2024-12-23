import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">Have questions or want to work together? Let’s talk!</p>
        <form className="max-w-lg mx-auto">
            <div className="mb-4">
                <input type="text" placeholder="Your Name"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <input type="email" placeholder="Your Email"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <textarea placeholder="Your Message"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-all">Send
                Message</button>
        </form>
    </div>
</section>
  )
}

export default Contact
