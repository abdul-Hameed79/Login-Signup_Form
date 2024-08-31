import React from 'react';
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo-Full-Light.png";

export default function Navbar({loggedin, setLoggedin}) {
  return (
    <div className='flex justify-between items-center gap-6 w-11/12 max-w-[1160px] mx-auto text-white flex-wrap'>
       <div className='mt-4'>
        <Link to="/" >
              <img src={logo} width={160} height={32} alt='logo' loading='lazy'/> 
          </Link>
       </div>
        <nav className='mt-4'>
          <ul className='flex gap-10 text-slate-300 flex-wrap'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='flex gap-8 mt-4 flex-wrap'>
            { !loggedin &&
              <Link to="/login">
                <button className='bg-slate-800 px-3 py-1 rounded-lg border border-slate-700'>
                  Login
                </button>
              </Link>
            }
            { !loggedin &&
              <Link to="/signup">
                <button className='bg-slate-800 px-3 py-1 rounded-lg border border-slate-700'>
                  Signup
                </button>
              </Link>
            }
            { loggedin &&
              <Link to="/">
                <button className='bg-slate-800 px-3 py-1 rounded-lg border border-slate-700' 
                onClick={() => {
                  setLoggedin(false);
                  toast.success("Log out successfully");
                }}>
                  Logout
                </button>
              </Link>
            }
            { loggedin &&
              <Link to="/dashboard">
                <button className='bg-slate-800 px-3 py-1 rounded-lg border border-slate-700'>
                  Dashboard
                </button>
              </Link>
            }
          </div>
    </div>
  )
}

