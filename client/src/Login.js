import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label for='username'>Username: </label>
            <input id='username'></input>
            <br></br>
            <br></br>
            <label for='password'>Password: </label>
            <input id='password'></input>
        </form>
    </div>
  )
}

export default Login