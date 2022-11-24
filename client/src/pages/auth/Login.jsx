import React from "react";
import './auth.css'

const Login = () => {
  return (
    <div className='auth_from'>
      <div>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
