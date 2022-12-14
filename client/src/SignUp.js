import { useState } from 'react'
import { NavLink, useHistory} from 'react-router-dom'


function SignUp({updateUser}) {
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
          updateUser(user)
          history.push('/')
        })
      } else {
        r.json().then(json => setErrors(Object.entries(json.errors)))
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
        <h1 class="text-2xl font-bold mb-2">Sign Up</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Create Username: </label>
            <input id='username' name='username' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <label htmlFor='password'>Create Password: </label>
            <input id='password' name='password' type='password' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type='submit' value='Sign Up' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
            {errors ? errors.map(e => <div>{e[0]+': ' + e[1]}</div>) : null}
        </form>
        <br></br>
        <div><NavLink to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login Instead</NavLink></div>
    </div>
  )
}

export default SignUp