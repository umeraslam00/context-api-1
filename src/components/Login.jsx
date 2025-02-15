import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //we got the setUser from the UserContextProvider. We use it to set the value of User.
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {

       //when we submit, the value goes to the url. We don't want that!
        e.preventDefault()

        setUser({username, password})
    }


  return (
    <div>
     <h2>Login</h2>
     <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
     <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login