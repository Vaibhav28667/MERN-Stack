'use client'
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 1;

    // const [count, setCount] = useState(1);

    const [TaskList, setTaskList] = useState([
        
    ]);

    const addNewTask = (e) => {
        if(e.code === 'Enter'){
            console.log(e.target.value);
            
            const newTask = { task: e.target.value, completed: false};

            setTaskList([ newTask, ...TaskList ])

            e.target.value = '';
        }   
    };


    const deleteTask = (index) => {
        const temp = TaskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }
  return (
    <div className='bg-gray-100 min-h-screen'>

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
                            onKeyDown={addNewTask}
                            className='py-2 px-5 text-lg w-full rounded-md bg-blue-100'
                            placeholder='Enter your text'
                            />
                </div>
                <div className='p-5'>

                    {
                        TaskList.length === 0 ? (
                            <p className='text-center font-bold text-gray-400 text-xl'>
                                 😎 No Todos to show yet
                            </p>
                          ):(
                            TaskList.map((obj, index)=>{
                                return <div key= {index}
                                className='border border-gray-400 p-4 rounded-lg mb-4 flex justify-between items-center'>
                                    
                                    
                                    <p className='text-lg'>{obj.task}</p>
                                    <button
                                        onClick={ () => {deleteTask(indes)}}
                                        className='bg-red-500 text-white p-2 rounded-md '>
                                        <Trash2 />
                                    </button>
                                    </div>
                            })
                          )
                    
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default TodoList