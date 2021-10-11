import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
        Enter your Email<input type="text" placeholder="Enter your name" style={{margin:'32px'}}></input><br/>
        Enter yourPassword <input type="password" placeholder="password" ></input><br/>
        <button type="search" style={{margin:'45px',background:'blue'}}><Link to='class1'>Submit</Link></button>
       <h1 className="class1">successfull complted</h1>
        </div>
    )
}

export default Login
