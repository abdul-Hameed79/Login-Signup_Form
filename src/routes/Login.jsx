import React from 'react';
import loginImg from "../Assets/login.webp";
import Template from '../components/Template';

export default function Login({setLoggedin}) {
  return (
    <Template 
      title="Welcome Back"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setLoggedin={setLoggedin}
    />
  )
}
