import './App.css';
import { useState } from 'react';

function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                password: password
            }),
        })

        const data = await response.json()

        if (data.user) {
            alert('Login successful')
            window.location.href = '/dashboard'
        } else {
            alert('Login failed')
        }

        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default App;
