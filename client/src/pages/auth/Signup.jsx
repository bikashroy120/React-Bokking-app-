import React from 'react'
import './auth.css'

const Signup = () => {
  return (
    <div className='auth_from'>
        <div>
            <input type="text" placeholder='User Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Signup