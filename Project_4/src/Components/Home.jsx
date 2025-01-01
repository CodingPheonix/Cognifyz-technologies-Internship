import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()

    // STATE LIST 
    const [strength_msg, setStrength_msg] = useState("")
    const [strength_color, setStrength_color] = useState("text-black")
    const [str_col_bar, setStr_col_bar] = useState("")
    const [show_password, setShow_password] = useState(false)

    // USEFORM 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // FORM SUBMIT
    const onSubmit = data => {
        navigate('/welcome', { state: data });
    };

    // PASSWORD RESTRICTION 
    const password = watch('password');

    // USEEFFECT 
    useEffect(() => {
        check_strength(password || "");
    }, [password]);

    const check_strength = (password) => {
        const has_numbers = /[0-9]/.test(password);
        const has_uppercase = /[A-Z]/.test(password);
        const has_lowercase = /[a-z]/.test(password);
        const has_special_chars = /[!@#$%^&*(){}[\]:;"'<>?,.]/.test(password);

        if (password.length === 0) {
            setStrength_msg("");
        }
        if (password.length < 8 &&
            (has_lowercase || has_numbers || has_uppercase || has_special_chars)) {
            setStrength_msg("Weak Password");
            setStrength_color("text-red-600");
            setStr_col_bar("bg-red-600");
        }
        if (password.length >= 8 &&
            (has_lowercase || has_numbers || has_uppercase || has_special_chars)) {
            setStrength_msg("Medium Password");
            setStrength_color("text-amber-200");
            setStr_col_bar("bg-amber-200");
        }
        if (password.length >= 8 && has_lowercase && has_numbers && has_uppercase && has_special_chars) {
            setStrength_msg("Strong Password");
            setStrength_color("text-green-400");
            setStr_col_bar("bg-green-400")
        }
    }



    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            placeholder='Enter Username'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register('username', {
                                required: { value: true, message: 'This field is required' },
                                maxLength: { value: 10, message: 'The maximum length should be 10' },
                            })}
                            type='text'
                        />
                        {errors.username && <span className="text-sm text-red-500">{errors.username.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className='flex justify-between items-center w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                            <input
                                placeholder='Enter password'
                                className='focus:outline-none focus:transparent'
                                {...register("password", {
                                    required: { value: true, message: 'This field is required' },
                                    minLength: { value: 5, message: 'Minimum length is 5' },
                                    maxLength: { value: 15, message: 'Maximum length is 15' }
                                })}
                                type={`${show_password ? 'text' : 'password'}`}
                            />
                            <div onClick={() => { setShow_password(!show_password) }}>{show_password ? <BiSolidHide /> : <FaEye />}</div>
                        </div>
                        <div className={`w-full h-1 mt-2 rounded-full ${str_col_bar}`}></div>
                        <div className={`${strength_color} text-center`}>{`${strength_msg}`}</div>
                        {errors.password && <div className='text-sm text-red-500'>*{errors.password.message}</div>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home
