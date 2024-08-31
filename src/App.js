import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login setLoggedin={setLoggedin}/>} />
        <Route path="signup" element={<Signup setLoggedin={setLoggedin}/>} />
        <Route path="dashboard" element={<Dashboard/>} />        
      </Routes>

    </div>
  );
}

export default App;
