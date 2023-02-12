import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default App;
