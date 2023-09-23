import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="loginCard">
            <form>
            <label for="username">
                User Name
            </label>
                <input id="username" className='username' type="text">

                </input>
                <label for="password">
                    Password
                </label>
                <input id="password" className='password' type="password">

                </input>
                <button type="submit"></button>
            </form>
        </div>
        <div className="googleLogin">
            
        </div>
    </div>
  )
}

export default Login