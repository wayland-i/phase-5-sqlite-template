import React, {useState} from 'react'
import { NavLink, useHistory} from 'react-router-dom'

function Login({updateUser}) {
  const [errors, setErrors] = useState([])
  const history = useHistory()


  const [formData, setFormData] = useState({
    username:'',
    password:''
})

const {username, password} = formData


const onSubmit = (e) => {
  e.preventDefault()
  const user = {
    username,
    password
  }
  fetch('/login',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(r => {
      if(r.ok){
          r.json().then(user => {
              updateUser(user)
              history.push(`/`)
          })
      }else {
          r.json().then(json => setErrors(json.error))
      }
  })
}

// console.log(errors)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value})
  }


  return (
    <div> 
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Username: </label>
            <input id='username' name='username' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <label htmlFor='password'>Password: </label>
            <input id='password' type='password' name='password' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type='submit' value='Log In' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
        </form>
        {errors? <div>{errors}</div>:null}
        <br></br>
        <div><NavLink to="/sign_up" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up Instead</NavLink></div>
    </div>
  )
}

export default Login