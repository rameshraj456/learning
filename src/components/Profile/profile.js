import React from 'react'

function profile({user}) {
  return (
    <div>
      <div>
        <img src='user.image' alt='user.name'/>

        <h1>{user.name}</h1>
        <p>About :{user.about}</p>
        <p>Skills :</p>
        {   
        
            user.strengths.map((skills,index) =>
           <p key={index}>{user.skills}</p>
            )
        }
      </div>
    </div>
  )
}

export default profile
