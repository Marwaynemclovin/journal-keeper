import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login
            <form>
                <input required type="text" placeholder='email' />
                <input required type="password" placeholder='password' />
                <button>Login</button>
                <p>An error has occurred</p>
                <span> <Link to ="/login">Login</Link></span>
            </form>
        </h1>
    </div>
  )
}

export default Login;