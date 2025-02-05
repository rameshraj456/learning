import React from 'react'

function ArrayObjects() {
    const students = [
        {
            name: 'A',
            class: 'IT_C',
            dept: 'IT',
            rollNo: '1'
        },
        {
            name: 'B',
            class: 'IT_C',
            dept: 'IT',
            rollNo: '2'
        },
        {
            name: 'C',
            class: 'IT_B',
            dept: 'IT',
            rollNo: '3'
        },
        {
            name: 'D',
            class: 'IT_A',
            dept: 'IT',
            rollNo: '4'
        },
        {
            name: 'E',
            class: 'IT_B',
            dept: 'IT',
            rollNo: '5'
        },
        {
            name: 'F',
            class: 'IT_A',
            dept: 'IT',
            rollNo: '6'
        }
    ];
    
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {
        students.map( (x,index) => <Student student={x} idx={index}/>)
      }
    </div>
  )
}


function Student( {student , idx})
{
    return <div className='object-component' style={{width:"300px"}}>
                <p>S.no : {idx}</p>
                <p>name : {student.name}</p>
                <p>class : {student.class}</p>
                <p>dept : {student.dept}</p>
                <p>rool no : {student.rollNo}</p>
            </div>
}

export default ArrayObjects
