import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users , setUsers] = useState([])
    const [reload , setReload] = useState(0)

    async function getData()
    {
        try
        {
            let data = await fetch("https://jsonplaceholder.typicode.com/users")
        
            data = await data.json()
            console.log(data)
            setUsers(data)
        }
        catch(err)
        {
            alert(err.message)
        }
    }
    
    useEffect(()=>{
        getData()
    },[ reload ])

  return (
    <div  >
        <h1>users</h1>
        <button 

        onClick={() => setReload(reload+1) }

        >Reload</button>

        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            {
                users.map( (user,index) => <User user={user} index={index} /> )
            }
        </div>
    </div>
  )
}

export default Fetch;

function User( { user,index })
{
    return <div style={{backgroundColor:"blue", color:"white",width:"300px",padding:"20px",margin:"20px",borderRadius:"10px"}}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>

                <Address address={user.address}/>
                <Company  company={user.company} />

            </div>
}


function Address({ address }){
    return (
        <div style={{backgroundColor:"#FFB22C",padding:"1px",margin:"2px",borderRadius:"10px"}} >
            <b>Address :-</b>
            <p>{address.street}</p>
            <p>{address.city}</p>
        </div>
    )

}
function Company( { company } )
{
    return <div style={{backgroundColor:"#FFB22C",padding:"1px",margin:"2px",borderRadius:"10px"}}  >
                <b>Company :-</b>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
}