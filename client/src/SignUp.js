import { useState } from 'react'
import {useHistory} from 'react-router-dom'


function SignUp() {
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

    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(r => {
      if (r.ok){
        r.json().then(user => {
          history.pushState('/')
        })
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value})
  }


  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
            <label for='username'>Create Username: </label>
            <input id='username' name='username' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <label for='password'>Create Password: </label>
            <input id='password' name='password' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type='submit' value='Sign Up' />
        </form>
    </div>
  )
}

export default SignUp