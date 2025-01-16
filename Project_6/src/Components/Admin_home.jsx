import React, { useEffect, useState } from 'react'
import Form_CreateRole from './Form_CreateRoll'
import { IoAddOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

const Admin_home = () => {

    const [user_list, setUser_list] = useState([])
    const [role_list, setRole_list] = useState([])
    const [isCreating, setIsCreating] = useState(false)
    const [isAppointing, setIsAppointing] = useState(false)
    const [curr_user, setCurr_user] = useState("")

    const get_roleData = async () => {
        try {
            const responce = await fetch('http://localhost:3000/get_roleData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const result = await responce.json()
            return { responce: responce, result: result }
        } catch (error) {
            throw new Error(error);
        }
    }

    const get_users = async () => {
        try {
            const responce = await fetch('http://localhost:3000/get_users', {
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

    const assign_role = async (curr_user, role) => {
        try {
            const responce = await fetch(`http://localhost:3000/assign`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ curr_user, role })
            })
            const result = await responce.json()
            return { responce: responce, result: result }
        } catch (error) {
            throw new Error(error);
        }
    }


    const set_users = async () => {
        const { responce, result } = await get_users()
        const userlist = result.data.map((item) => item.name)
        setUser_list(userlist)
    }


    const fetchRoles = (result) => {
        try {
            const rolesList = result.data.map((item) => item.role);
            return rolesList
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const setroles = async () => {
        const { responce, result } = await get_roleData()
        if (responce.status === 200) {
            const rolelist = fetchRoles(result)
            setRole_list(rolelist)
        } else {
            console.log('cant fetch roles')
        }
    }

    const add_role = (role) => {
        isAppointing && (addRole(role))
    }



    const addRole = (role) => {
        assign_role(curr_user, role)
        toast("Role Added", {
            position: "top-right",
            autoClose: 2000,
        })
        setIsAppointing(!isAppointing)
    }


    useEffect(() => {
        setroles()
        set_users()
    }, [])


    return (
        <div className='bg-orange-200 h-screen flex justify-center items-center relative'>
            <ToastContainer />
            <div className='h-[70%] w-full flex flex-col justify-around items-center gap-4'>
                <h1 className='h-[10%] text-center w-1/2 p-4 rounded-3xl bg-orange-500 text-white text-xl font-bold flex justify-center items-center'>Assign a Domain to a User</h1>
                <button onClick={() => { setIsCreating(!isCreating) }} className='h-[10%] text-center w-1/4 p-4 rounded-3xl bg-white border-2 border-orange-500 text-orange-500 text-xl font-bold flex justify-center items-center'>Create Role</button>
                <div className='flex justify-around items-center w-[90%] h-[90%] gap-4'>
                    <div className='h-full w-1/2 p-4 rounded-3xl bg-white flex flex-col items-center gap-4'>
                        {user_list.length === 0 ? (
                            <p>No users found</p>
                        ) : (
                            <ul className='w-full '>
                                {user_list.map((user, index) => {
                                    return (
                                        <li key={index} className='w-full flex items-center px-4 justify-around bg-gray-100 text-gray-800 rounded-lg m-1'>
                                            <div
                                                className='w-full text-gray-800 rounded-lg m-2'
                                            >{user}</div>
                                            <IoAddOutline onClick={() => { setIsAppointing(!isAppointing); setCurr_user(`${user}`) }} />
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                    <div className={`h-full w-1/2 p-4 rounded-3xl bg-white flex flex-col items-center gap-4 ${isAppointing && 'border-2 border-orange-600'}`}>
                        {role_list.length === 0 ? (
                            <p>No roles found</p>
                        ) : (
                            <ul className='w-full text-center'>
                                {role_list.map((role, index) => {
                                    return (
                                        <li
                                            onClick={() => { add_role(role) }}
                                            key={index}
                                            className='w-full p-1 bg-gray-100 text-gray-800 rounded-lg m-2'
                                        >{role}</li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {isCreating && <Form_CreateRole setRole_list={setRole_list} role_list={role_list} setIsCreating={setIsCreating} isCreating={isCreating} />}
        </div>
    )
}

export default Admin_home
