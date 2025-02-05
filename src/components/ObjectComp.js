import React from 'react'
import './styles.css'

function ObjectComp() {
    const student = {
        name:'ramesh',
        roolNo:'22071a12k0',
        cgpa:'9.8',
        class:'IT-c'
    }
    
  return (
    <div className='object-component'>
      <p>student details</p>
      <div>
        <p>name : {student.name}</p>
        <p>rool no :- {student.roolNo}</p>
        <p>CGPA :- {student.cgpa}</p>
        <p>class :- {student.class}</p>
      </div>
    </div>
  )
}

export default ObjectComp
