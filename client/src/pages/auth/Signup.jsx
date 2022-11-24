import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/authContext'
import './auth.css'

const Signup = () => {
    const [signupData,setSignupData] = useState({
        username:"",
        email:"",
        password:""
    })
    const [lodding,setLodding] = useState(false)
    const [error,setError]= useState(null)

    const navigate = useNavigate()


    const handelData  = (e)=>{
        setSignupData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            setLodding(true)
          const res = await axios.post("http://localhost:8000/api/auth/register", signupData);
          console.log(res)
   
        //   navigate("/login")
        setLodding(false)
        } catch (err) {
            setError(err.response.data)
        }
      };


  return (
    <div className='auth_from'>
        <div>
            <input type="text" placeholder='User Name' id="username" onChange={handelData}/>
            <input type="email" placeholder='Email' id="email" onChange={handelData}/>
            <input type="password" placeholder='Password' id="password" onChange={handelData}/>
            {/* {error && <p style={{color:"red"}}>{error}</p>} */}
            <button disabled={lodding} onClick={handleClick}>Sign up</button>
        </div>
    </div>
  )
}

export default Signup