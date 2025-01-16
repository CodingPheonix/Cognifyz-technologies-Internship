import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsLogin, isLogin }) => {

    const [reveal, setReveal] = useState(false)
    const [server_error, setServer_error] = useState("")

    const navigate = useNavigate()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const upload_data = async (data) => {
        const responce = await fetch(`http://localhost:3000/upload_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const result = await responce.json()
        return { responce: responce, result: result }
    }


    const onSubmit = async data => {
        const { responce, result } = await upload_data(data)
        if (responce.status === 400) {
            setServer_error(result.message)
        } else {
            if (result.data.role === "admin") {
                navigate('/admin_home', { state: result.data })
            }else{
                navigate('/user_home', { state: result.data })
            }
        }
        reset()
    };

    return (
        <div id="sign-up-page" className="w-full max-w-md p-6 bg-white rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Sign Up</h2>
            {/* FORM HERE */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* NAME  */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        {...register("name", {
                            required: { value: true, message: "This field is required" },
                        })}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                    {errors.name && <div className='text-center text-red-500'>{errors.name.message}</div>}
                </div>
                {/* E-MAIL  */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: { value: true, message: "This field is required" } })}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                    {errors.email && <div className='text-center text-red-500'>{errors.email.message}</div>}
                </div>
                {/* PASSWORD  */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className='flex justify-between items-center mt-1  w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500'>
                        <input
                            type={reveal ? "text" : "password"}
                            {...register("password", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 6, message: "Password must have at least 6 characters" },
                                maxLength: { value: 20, message: "Password must have at most 20 characters" }
                            })}
                            className="focus:outline-none focus:bg-transparent" />
                        <span onClick={() => setReveal(!reveal)}>{reveal ? <BiSolidHide /> : <FaEye />}</span>
                    </div>
                    {errors.password && <div className='text-center text-red-500'>{errors.password.message}</div>}
                </div>
                {/* ROLE  */}
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <div className='flex justify-between items-center mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500'>
                        <select
                            {...register("role", {
                                required: { value: true, message: "This field is required" }
                            })}
                            className="w-full focus:outline-none focus:bg-transparent"
                        >
                            <option value="">Select a role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    {errors.role && <div className='text-center text-red-500'>{errors.role.message}</div>}
                </div>

                {/* SUBMIT  */}
                <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">Sign Up</button>
                {server_error && <div className='text-center text-red-500'>*{server_error}</div>}
                {/* LOGIN  */}
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account? <span onClick={() => { setIsLogin(!isLogin) }} className="text-orange-500 hover:cursor-pointer hover:underline">Login</span>
                </p>
            </form>
        </div>
    )
}

export default Signup
