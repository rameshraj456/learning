import React ,{useState}from 'react'
import './LoginPage.css'

function LoginPage() {

    const [username ,setUserName] = useState()
    const [password,setPassword] = useState()

    function login(e){

        e.preventDefault()

        if(!username && !password){
            alert('Null values ...')
        }
        else if(!username){
            alert('username is requerid ...')
        }
        else if(!password){
            alert('password is required ...')
        }
        else{
            if(username.length <5){
                alert('username must be greater than 5 ...')
            }
            else if (password.length < 8){
                alert('password must be greater than 8 ...')
            }
            else{
                alert('login successfull .....')
            }
        }

    }
  return (
    <div className='loginPage'>
       <form>

        <h1>Login</h1>
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

export default LoginPage
