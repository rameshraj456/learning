import React, { useState } from 'react'

function Login2() {
    const [students , setStudents] = useState([])
    const [form , setForm] = useState({})

    function register(e)
    {
        e.preventDefault()
        console.log(form)
        setStudents( prevData => ([...prevData , form]))
        setForm({})
    }
  return (
    <div>

        <h1>Registered students</h1>

        <div>
            {
                students.map( student => <Student data={student} />)
            }
        </div>
      <form>
        <input type="text" placeholder='name' onChange={(e)=>setForm(prevData => setForm({...prevData , name:e.target.value}))} />
        <br></br>
        
        <input type="password" placeholder='password'   onChange={(e)=>setForm(prevData => setForm({...prevData , password:e.target.value}))}   />
        <br></br>

        <input type="number" placeholder='phone'    onChange={(e)=>setForm(prevData => setForm({...prevData , phone:e.target.value}))}    />
        <br></br>
        <input type="email" placeholder='email' onChange={(e)=>setForm(prevData => setForm({...prevData , email:e.target.value}))}   />
        <br></br>
        <input type="text" placeholder='roolno' onChange={(e)=>setForm(prevData => setForm({...prevData , roolNo:e.target.value}))}       />
        <br></br>

        <label>Select section</label>
        <br/>
        <select onChange={(e)=>setForm(prevData => setForm({...prevData , section:e.target.value}))}  >
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
        </select>


        <button  onClick={(e)=>register(e)}>
            Register
        </button>
      </form>
    </div>
  )
}

function Student({data})
{
    return <div style={{backgroundColor:"green",padding:"10px",margin:"10px"}}>
        <p>{`name : ${data.name}`}</p>
        <p>{`password : ${data.password}`}</p>
        <p>{`section : ${data.section}`}</p>
        <p>{`rool no : ${data.roolNo}`}</p>
    </div>
}

export default Login2
