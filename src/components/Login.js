import React, { useState } from 'react'

function Login() {
    const [username , setUserName] = useState()
    const [password , setPassword] = useState();

    
    function login(e)
    {
        e.preventDefault();

        console.log("called")

        if(!username || !password)
        {
            alert("null value provided.")
        }
        else if(!username)
        {
            alert("username is null")
        }
        else if(!password)
        {
            alert("password id null.")
        }
        else
        {
            // username > 5
            if(username.length < 5)
            {
                alert("user name should be greater then 5")
            }
            else if(password.length < 8)
            {
                alert("password should be greater then 8")
            }
            else
            {
                alert("login success.")
            }
        }
    }
    
  return (
    <div>
      <form>
        <label>Your user name : {username}</label>
        <br/>
        <input
         type='text'
         placeholder='username'
         onChange={(e)=>{
            setUserName(e.target.value)
         }}
         />
        <br/>
        <label>Your password : {password}</label>
        <br/>
        <input 
        type='password' 
        placeholder='password'
        onChange={(e)=> setPassword(e.target.value)}
        />
        <br/>

        <button
        onClick={(e) => login(e)}
        >Login</button>

      </form>
    </div>
  )
}

export default Login
