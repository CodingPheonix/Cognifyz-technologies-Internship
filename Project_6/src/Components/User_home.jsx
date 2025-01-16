import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const User_home = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state

    const [task_list, setTask_list] = useState([])

    const fetchTasks = async () => {
        try {
            const responce = await fetch(`http://localhost:3000/get_tasks/${data._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const result = await responce.json()
            return { responce: responce, result: result }
        } catch (error) {
            throw new Error(error);
        }
    }

    const setTasks = async () => {
    try {
        const { response, result } = await fetchTasks();
        setTask_list(result.data.task);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

    useEffect(() => {
        setTasks()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
                {/* Welcome Message */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">
                        Welcome, <span className="text-orange-500">{data.name}</span>
                    </h1>
                </div>

                {/* Task List */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Your tasks are:</h2>
                    <ul className="space-y-2">
                        {task_list.length === 0 ? (
                            <li className="text-gray-600 text-center">No tasks yet!</li>
                        ) : (
                            task_list.map((task, index) => (
                                <li
                                    key={index}
                                    className="p-4 text-center bg-orange-50 border border-orange-200 rounded-lg text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {task}
                                </li>
                            ))
                        )}
                    </ul>
                    <div className='w-full flex justify-center items-center gap-4 mt-4'>
                        <button
                            onClick={() => { navigate('/') }}
                            className='py-2 px-5 bg-orange-500 text-white font-semibold rounded-full'>Log out</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default User_home
