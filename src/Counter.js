
// function component 

import { useState } from "react";

function Counter(){

    const[count=0,setCount] = useState(0)

    return(
        <>
            <h1>you clicked count {count}</h1>

            <button onClick={()=> setCount(count + 1)}>
                Plus
            </button>


            <button onClick={()=> setCount(count - 1)}>
                minus
            </button>
        </>
    )
    
    
}


export default Counter;