import React from 'react';
import signupImg from "../Assets/signup.webp";
import Template from '../components/Template';

export default function({setLoggedin}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education is to future-proof your career."
      image={signupImg}
      formtype="signup"
      setLoggedin={setLoggedin}
    />
  )
}
