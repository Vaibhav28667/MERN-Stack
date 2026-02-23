'use client'
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 1;

    const [count, setCount] = useState(1);

  return (
    <div className='bg-gray-100 h-screen'>

        {/* <button className='border p-4 ' onClick={() => {alert('Button was Clicked'); }}>
            Submit
        </button>
       
       <h1 className='text-2xl'>{count}</h1>

          <button className='border p-3 mt-5  hover:bg-emerald-400 text-black'
            onClick={ () => {
                // count++;
                setCount(count+1);
                console.log(count);
                
            }}
        >add count</button> */}


        <div className='container py-10 mx-auto'>
            <h1 className='text-2xl text-center font-bold mb-10'>Todo List</h1>
            <div className='border rounded-xl bg-white shadow-xl'>
                <div className='p-5'>
                        <input type='text'
                            className='py-2 px-5 text-lg w-full rounded-md bg-blue-100'
                            placeholder='Enter your text'
                            />
                </div>
                <div>
                    <p className='text-center font-bold text-gray-400 text-xl'>
                        😎 No Todos to show yet
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TodoList