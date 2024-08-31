import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router';

const SignupForm = ({ setLoggedin }) => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", conformPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");
    const navigate = useNavigate();

    function ChangeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (formData.password !== formData.conformPassword) {
            toast.error("Password does not match");
            return;
        }
        setLoggedin(true);
        toast.success("Account created");
        navigate("/dashboard");
    }

    const handleClick = (role) => {
        setSelectedRole(role);
    }

    return (
        <div >
            <div className='flex space-x-8 mt-4 p-1 text-lg bg-slate-800 rounded-full max-w-max shadow-sm shadow-slate-400'>
                <button onClick={() => handleClick("student")}
                className={`px-3 py-1 rounded-full ${selectedRole === "student" ? "bg-black text-white" : "text-gray-500"} `}
                    
                    >
                    Student
                </button>
                <button onClick={() => handleClick("instructor")}
                    className={`px-3 py-1 rounded-full ${selectedRole === "instructor" ? "bg-black text-white" : "text-gray-500"}`}
                    >
                    Instructor
                </button>
            </div>
            <form className='my-4'
            onSubmit={SubmitHandler} >
                <div className='flex gap-x-4 mt-4'>
                    <label className='w-full'>
                        <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>First Name<sup className='text-red-500'>*</sup></p>
                        <input
                            type='text'
                            name='firstName'
                            onChange={ChangeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400'

                        />
                    </label>
                    <label className='w-full'>
                        <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>Last Name<sup className='text-red-500'>*</sup></p>
                        <input
                            type='text'
                            name='lastName'
                            onChange={ChangeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            required
                            className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400'

                        />
                    </label>
                </div>
                <div className='mt-4'>
                    <label className='w-full'>
                        <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>Email Address<sup className='text-red-500'>*</sup></p>
                        <input
                            type="email"
                            name="email"
                            onChange={ChangeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            required
                            className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400'

                        />
                    </label>
                </div>
                <div className='flex gap-x-4 mt-4'>
                    <label className='relative w-full'>
                        <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>Create Password<sup className='text-red-500'>*</sup></p>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={ChangeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            required
                            className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400 text-ellipsis'

                        />
                        <span className='absolute right-3 top-[34px] cursor-pointer'
                        onClick={() => { setShowPassword((prev) => !prev) }}>
                            {showPassword ? <AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/> : <AiOutlineEye fontSize={20} fill='#AFB2BF'/>}
                        </span>
                    </label>
                    <label className='relative w-full'>
                        <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>Conform Password<sup className='text-red-500'>*</sup></p>
                        <input
                            name="conformPassword"
                            type={showPassword ? "text" : "password"}
                            onChange={ChangeHandler}
                            placeholder='Re-Enter Password'
                            value={formData.conformPassword}
                            required
                            className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400 text-ellipsis'

                        />
                        <span className='absolute right-3 top-[34px] cursor-pointer'
                        onClick={() => { setShowConformPassword((prev) => !prev) }}>
                            {showConformPassword ? <AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF' /> : <AiOutlineEye fontSize={20} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-300 rounded p-1 font-medium mt-6'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;
