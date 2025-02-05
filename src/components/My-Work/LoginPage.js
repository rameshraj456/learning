import React, { useState } from 'react'

function LoginPage() {

    const [name,setName] = useState()
    const [password,setpassword] = useState()

    function login(e){

        e.preventDefault()

        if(!name && !password){
            alert('null value')

        }
        else if(!name){
            alert('name null')
        }
        else if(!password){
            alert('password null')
        }else{
            if (name.length < 5){
              alert('name should be greater than 5')
            }
            else if(password.length < 8){
              alert('password should be greaater than 8')

            }
            else{
                alert('login messege')
            }
        }

    }
  return (
    <div>
      <form>
        <input type='text' placeholder='name'onChange={(e) => setName({name:e.target.value})} />
        <br />
        <input type='password' placeholder='password'onChange={(e) => setName({password:e.target.value})} />
        <br />
        <buuton onclick={(e) => login(e)}>
            submit
        </buuton>


      </form>
    </div>
  )
}

export default LoginPage
