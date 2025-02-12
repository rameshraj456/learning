import React from 'react'

function Profile({user}) {
  return (
    <div>
    <div style={{backgroundColor:'#A0C878',width:'350px',margin:'20px',padding:'20px'}}>
      <img src='user.image' alt='user.name'/>

      <h1>{user.name}</h1>
      <p>About :{user.about}</p>
      <div style={{backgroundColor:'#FFF2F2',padding:'5px'}}>
        <p>Skills :</p>
        {   
        
            user.strengths.map((skills,index) =>
          <p key={index}>{skills}</p>
            )
        }
      </div>
    
    </div>
  </div>
  )
}

export default Profile

















