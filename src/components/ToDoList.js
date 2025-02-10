import React from 'react'
import { useNavigate } from 'react-router-dom'

function ToDoList() {
  const navigate = useNavigate();

  return (
    <div>
      <ol>
          <li>useEffect</li>
          <li>fetch()</li>
          <li>try , catch</li>
          <li>Conditional rendering</li>
          <li>count up , down counter</li>
          <li>on click button show image else not show</li>
          <li>IMAGE SIDE BAR</li>
      </ol>

      <ul>
        {
          ['' , 'todo' , 'fetch' , 'counter' , 'conditional' , 'image-show']
          .map( item => <li
                          onClick={ () => navigate(`${item}`)}
                          style={{cursor:"pointer"}}
                          > {item}</li>)
        }
      </ul>
    </div>
  )
}

export default ToDoList
