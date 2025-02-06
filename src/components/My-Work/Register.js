import React ,{useState} from 'react'
import './Register.css'


function Register() {
    const [passengers,setPassenger]=useState([])
    const [form,setForm]=useState({}) 

    function bookTicket(e){
        e.preventDefault()

        setPassenger(prevData => [...prevData,form] )

        setForm({})

    }

  return (
    <div > 

      
      <div className='container'>

        <div className='col' style={{padding:'40px'}}>
            <form >
                <label>Passenger Name </label>
                <input type='text'  placeholder='name'   onChange={(e) => setForm(prevData => ({...prevData,name:e.target.value}))}/>
                <br />
                <label>Email</label>
                <input type='email' placeholder='email'  onChange={(e) => setForm(prevData => ({...prevData,email:e.target.value}))} />
                <br />
                <label>Train Number</label>
                <input type='number'  placeholder='trainNumber'  onChange={(e) => setForm (prevData => ({...prevData,trainNumber:e.target.value}))} />
                <br />
                <label>Journey Date</label>
                <input type='date' placeholder='date' onChange={(e) => setForm(prevData=>({...prevData,date:e.target.value}))}/>
                <br />

                <label>Class</label>

                <select onchage ={(e) => setForm(prevData => ({...prevData,select:e.target.value}))}>
                    <option>sleeper</option>
                    <option> AC</option>
                    <option>General</option>
                </select>
                
                <button onClick={(e) => bookTicket(e)}>Book Ticket</button>
            </form>

        </div>
        <div className='col'>
        <h1>Passengers Details</h1>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",padding:'20px' , margin:'30px'  }}>
                
                    {
                    passengers.map(passenger => <Passenger data={passenger}/>)
                    }
            </div> 
        </div>

    </div> 
    </div>
  )
}


function Passenger({data}){
    return  <div   className='passenger-card 'style={{ padding:'20px',margin:'10px' ,paddingLeft:'40px',width:'100%' ,textAlign:'left',
        background:' rgb(111, 181, 242)'}} >  
                <p>{`passenger name : ${data.name}`}</p>
                <p>{`email : ${data.email}`}</p>
                <p>{`Train Number : ${data.trainNumber}`}</p>
                <p>{`journey Date : ${data.date}`}</p>
                <p>{`Class :  ${data.select}`}</p>
            </div>

}

export default Register
