import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    
    <div style={{textAlign:"center"}}>
        <b style={{fontSize:"160px"}}>{count}</b>

        <div style={{display:"flex",justifyContent:"space-around"}}>
            <button 
            onClick={() => setCount(count+1)}
            style={{backgroundColor:"green",cursor:"pointer",color:"white"}}
            >Increment</button>

            <button 
            onClick={() => count == 0 ? setCount(0) : setCount(count-1) 
            }
            style={{backgroundColor:"green",cursor:"pointer",color:"white"}}
            >Decrement</button>
        </div>
    </div>
  )
}

export default Counter
