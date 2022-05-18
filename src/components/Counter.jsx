import { useState } from "react"
import "../components/Counter.css"

export const Counter = ({initial}) => {
    const [count,setCount] = useState(initial);
    return (
        <div>
            <h2 className={count%2===0 ? "green" : "red"}>Counter : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}