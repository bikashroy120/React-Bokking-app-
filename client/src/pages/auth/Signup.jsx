import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/authContext'
import './auth.css'

const Signup = () => {
   const [username,setusername] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
    const [lodding,setLodding] = useState(false)
    const [error,setError]= useState(null)

    const navigate = useNavigate()


    const handleClick = async (e) => {
        
        if(username === "" ||  email === "" || password === ""){
            setError("file all data")
        }else{
            try {
                setLodding(true)
              const res = await axios.post("http://localhost:8000/api/auth/register", {});
              if(res.status === 201){
                navigate("/login")
              }
            setLodding(false)
            } catch (err) {
                console.log(err)
            }
        }
      };


  return (
    <div className='auth_from'>
        <div>
            <input type="text" placeholder='User Name' value={username} onChange={(e)=>setusername(e.target.value)}/>
            <input type="email" placeholder='Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button disabled={lodding} onClick={handleClick}>Sign up</button>
        </div>
    </div>
  )
}

export default Signup