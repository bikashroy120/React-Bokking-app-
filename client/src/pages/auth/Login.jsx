import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/authContext";
import './auth.css'

const Login = () => {
    const [signupData,setSignupData] = useState({
        username:"",
        password:""
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()


    const handelData  = (e)=>{
        setSignupData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("http://localhost:8000/api/auth/login", signupData);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

  return (
    <div className='auth_from'>
        <div>
            <input type="text" placeholder='User Name' id="username" onChange={handelData}/>
            <input type="password" placeholder='Password' id="password" onChange={handelData}/>
            {/* {error && <p style={{color:"red"}}>{error}</p>} */}
            <button disabled={loading} onClick={handleClick}>Sign up</button>
        </div>
    </div>
  )
};

export default Login;
