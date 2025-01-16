import React from 'react';
import { useForm } from 'react-hook-form';

const Form_CreateRole = ({ setRole_list, role_list, setIsCreating, isCreating }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const upload_taskData = async (data) => {
        try {
            const responce = await fetch('http://localhost:3000/upload_taskData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const result = await responce.json()
            return {responce: responce, result: result}
        } catch (error) {
            throw new Error(error);            
        }
    }

    const onSubmit = (data) => {
        setRole_list([...role_list, data.role]);
        upload_taskData({role: data.role, task: [data.task1, data.task2, data.task3]})
        setIsCreating(!isCreating);
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl font-semibold text-center mb-4">Create Role and Tasks</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Role Input */}
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <input
                        id="role"
                        type="text"
                        {...register("role", {
                            required: { value: true, message: "Role is required" },
                            maxLength: { value: 20, message: "Role must be less than 20 characters" },
                        })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                    {errors.role && <div className="mt-1 text-red-500 text-center text-sm">*{errors.role.message}</div>}
                </div>

                {/* Tasks Inputs */}
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={`task${index + 1}`} className="block text-sm font-medium text-gray-700">
                            Task {index + 1}
                        </label>
                        <input
                            id={`task${index + 1}`}
                            type="text"
                            {...register(`task${index + 1}`, {
                                required: { value: true, message: `Task ${index + 1} is required` },
                                maxLength: { value: 50, message: `Task ${index + 1} must be less than 50 characters` },
                            })}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors[`task${index + 1}`] && (
                            <div className="mt-1 text-red-500 text-center text-sm">
                                *{errors[`task${index + 1}`].message}
                            </div>
                        )}
                    </div>
                ))}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default Form_CreateRole;
