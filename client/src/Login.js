import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login({updateUser}) {
  const history = useHistory()

  const [errors, setErrors] = useState([])

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
  fetch(`/login`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res => {
      if(res.ok){
          res.json().then(user => {
              updateUser(user)
              history.push(`/`)
          })
      }else {
          res.json().then(json => setErrors(json.errors))
      }
  })
}



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
            <input id='password' name='password' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type='submit' value='Log In' />
        </form>
    </div>
  )
}

export default Login