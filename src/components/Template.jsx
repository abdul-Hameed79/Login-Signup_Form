import React from 'react';
import { FcGoogle } from "react-icons/fc";
import frame from "../Assets/frame.png";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Template({title, desc1, desc2, image, formtype, setLoggedin}) {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-white text-[1.75rem] font-semibold leading-[2.1rem]'>{title}</h1>
            <p className='mt-4 text-lg leading-6'>
                <span className='text-slate-300'>{desc1}</span><br/>
                <span className='text-blue-500 italic'>{desc2}</span>
            </p>
            {formtype === "signup" ? <SignupForm  setLoggedin = {setLoggedin}/> : 
            <LoginForm setLoggedin={setLoggedin} />}
            <div className='flex w-full items-center gap-x-2'>
                <div className='h-1 w-full bg-slate-900'></div>
                <p className='text-slate-500 font-medium leading-4'>OR</p>
                <div className='h-1 w-full bg-slate-900'></div>
            </div>
            <button className='w-full mt-6 flex justify-center items-center rounded text-slate-300
            border border-slate-800 gap-x-2 p-1'>
                <FcGoogle />
                <p>Sign in with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt="frame" loading='lazy' width={558} height={584}/>;
            <img src={image} alt="image" loading='lazy' width={558} height={490}
            className='absolute -top-3 right-3' />
        </div>
    </div>
  )
}
