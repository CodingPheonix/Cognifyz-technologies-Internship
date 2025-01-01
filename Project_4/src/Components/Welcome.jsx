import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Welcome = () => {

    const location = useLocation()
    const user_data = location.state

    return (
        <div className='flex flex-col gap-3 justify-center items-center h-screen p-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white'>
            <div className='text-2xl font-bold'>
                YOU ARE WELCOME, {user_data.username}
            </div>
            < div className='px-4 py-2 bg-white text-black rounded-full font-semibold'>
            <Link to={'/'} >Back</Link>
            </div>
        </div>
    )
}

export default Welcome
