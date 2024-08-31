import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLoggedin}) => {
    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const Navigate = useNavigate();

    function ChangeHandler(event) {
        setFormData ((prevData) => (
            {
                ...prevData, 
                [event.target.name] : [event.target.value]
            }
        ))
    }

    function SubmitHandler(e) {
        e.preventDefault();
        setLoggedin(true);
        toast.success("Log in successful");
        Navigate("/dashboard");
    }

  return (
    <div className='my-6'>
        <form onSubmit={SubmitHandler}
        className='flex flex-col w-full mt-6 gap-y-4 '>
            <label className='w-full'>
                <p className='mb-1 text-slate-200 text-[0.95rem] leading-[1.35rems]'>
                    Email Address <sup className='text-red-500'>*</sup>
                </p>
                <input 
                    type='email'
                    value={formData.email}
                    onChange={ChangeHandler}
                    placeholder='Enter Email'
                    name='email'
                    required
                    className='w-full ml-2 rounded p-1 text-slate-200 bg-slate-800 text-md shadow-sm shadow-slate-400'
                />
            </label>
            <label className='w-full relative'>
                <p className=' text-slate-200 mb-1 text-[0.95rem] leading-[1.35rems]'>
                    Password <sup className='text-red-500'>*</sup>
                </p>
                <input
                    type={showPassword ? "text" : "password" }
                    value={formData.password}
                    onChange={ChangeHandler}
                    placeholder='Enter Password'
                    name='password'
                    required
                    className='w-full p-1 ml-2 text-slate-200 rounded text-md bg-slate-800 shadow-sm shadow-slate-400'
                />
                <span className='absolute right-3 top-[34px] cursor-pointer '
                onClick={() => {setShowPassword((prev) => !prev)}}>
                    {showPassword ? <AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/> : <AiOutlineEye fontSize={20} fill='#AFB2BF' />}
                </span>
                <Link to="/">
                    <p className='text-blue-500 text-end text-[0.85rem]'>
                        Forgot password?
                    </p>
                </Link>
            </label>
            <button className=' w-full bg-yellow-300 rounded p-1 font-medium mt-3'>
                Sign in
            </button>
        </form>
   </div>
  )
}

export default LoginForm;
