import React from 'react'

function ArrayComp() {
    const arr = [10,20,30,40,50]

    // using push methond on const
  return (
    <div>
      {
        arr.map( val => <p>{val}</p>)
      }
    </div>
  )
}

export default ArrayComp
