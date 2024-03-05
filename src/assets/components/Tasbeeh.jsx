import React from 'react'
import { useState } from 'react'


function Tasbeeh(){
    const[counter, setCounter]= useState(0)
    // function that handle increment action
    const handleIncrement=() =>{
        
        setCounter(counter+1)
    }
     // function that handle Decrement action
    const handleDecrement=()=>{
        if(counter > 0)
        setCounter(counter-1)
        
    }
     // function that handle Reset action
    const handleReset=()=>{
        setCounter(0)
    }
    return(
        <div className='border-2 border-slate-300 w-[500px] h-[300px] m-[150px] ml-[400px] p-4 text-center'>
            <div></div>
            <div>
                <h1 className='text-7xl mb-10'>{counter}</h1>
                <button onClick={handleIncrement} className='bg-orange-500 px-4 py-2 text-5xl m-2 rounded'>+</button>
                <button onClick={handleDecrement} className='bg-orange-500 px-4 py-2 text-5xl m-2 rounded'>-</button>
                <button onClick={handleReset} className='bg-green-500 px-4 py-2 text-2xl'>Reset</button>
            </div>

        </div>
    )
}
export default Tasbeeh


