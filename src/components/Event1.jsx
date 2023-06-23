import React, { useState } from 'react'

export const Event1 = () => {
    const handleClick=()=>{
        console.log("Hi Rajee"); 
    }

const [uname,setUname]=useState('Rajeenthan');
function changeWord(){
    setUname("Rajah")
    

}
  return (
    <div>
<h1> Hello! {uname}</h1>
<button onClick={()=>handleClick()}>Click</button>

<button onClick={changeWord}>Change word</button>
    </div>
  )
}
