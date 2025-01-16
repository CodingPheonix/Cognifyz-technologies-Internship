import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Hello = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <div className="h-screen flex flex-col gap-10 justify-center items-center bg-orange-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-600 mb-4">WELCOME</h1>
                <p className="text-lg text-gray-700">{JSON.stringify(data)}</p>
            </div>
            <Link to={'/'}><button className='bg-orange-600 text-white px-3 py-2 rounded'>Log out</button></Link>
        </div>
    )
}

export default Hello
