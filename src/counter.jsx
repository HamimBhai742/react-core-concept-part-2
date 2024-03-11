import { useState } from "react"

export default function CounHandel() {
    const [count, setCount] = useState(30)
    function incriseCounter() {
        const newCount = count + 1
        setCount(newCount)
        console.log(newCount);
    }

    const deCriseCounter = () => {
        const newCounter = count - 1
        setCount(newCounter)
        console.log(newCounter);
    }


    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={incriseCounter} style={{color:'green', border:"2px solid green"}}>Incrise</button>
            <button onClick={deCriseCounter} style={{color:'red', border:"2px solid red", marginLeft:'20px'}}>Decrise</button>
        </div>


    )
}