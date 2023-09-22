"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

  {/* Define State */}
  const [todo, setTodo] =useState([
    {movie:"Pakistan", id:1},
    {movie:"Catch me if you can", id:2},
  ]);

  const [input, setInput] = useState("")
  const [id, setId] = useState(0)

  // Function
  const addItem = ()=> {
    let obj:any = todo.find(item => item.id == id) 

    if(obj){
    let newArray = todo.filter(item => item.id !== obj.id)
    setTodo([...newArray, {movie:input, id:id}])
    setInput("")
    setId(0)
    return
  }
    
    setTodo([...todo, {movie:input, id:id}])
    setInput("")
    setId(0)
  }

  const editItem = (id:any)=> {
    let obj:any = todo.find(item => item.id == id)
    setInput(obj.movie)
    setId(obj.id)
  }

  const deleteItem = (id:any)=> {
    let newArray = todo.filter(item => item.id !== id)
    setTodo([...newArray])
  }

  return (
    <div className='max-w-4xl mx-auto p-5 text-white'>
      <h1 className='text-center text-5xl font-bold'>Todo App</h1>

      {/* Input Div */}
      <div className='flex justify-between gap-4 py-8'>
        
        {/* Input for Text  */}
        <input 
        type='text'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className='w-[60%] rounded p-2 ml-3 text-xl'
        placeholder='Add a new todo' 
        />

        {/* Input for Number  */}
        <input
        type='number'
        value={id}
        onChange={(e:any) => setId(e.target.value)}
        className='w-[20%] rounded p-2 ml-3 text-xl' placeholder='write id' 
        />

        {/* Button  */}
        <button onClick={addItem} className='bg-blue-500 hover:bg-blue-300 
        text-2xl font-bold w-[20%] p-2 rounded'>
          Add
        </button>
      </div>

      {/* Todos List */}
      <h1 className='text-center text-5xl font-bold font-sans py-3'>Todos List</h1>
      <div className='grid grid-cols-2 gap-5 py-5'>

      {/* Grid Items */}
      {
        todo.map((item, index)=> {
          return(
            <div key={index} className='shadow shadow-white p-4'>
          <div className='flex justify-between'>
            <span className='rounded-full shadow-blue-600 h-8 w-8 text-center'>
              {index+1}
            </span>
            <span onClick={() => deleteItem(item.id)} className='rounded-full shadow-blue-600 h-8 w-8 text-center cursor-pointer'>
              X
            </span>
          </div>

      {/* Data Div  */}
        <div className='py-5 text-[25px]'>{item.movie}</div>
          
          {/* Edit Data Button */}
          <div>
            <h2 onClick={() => editItem(item.id)} className='text-right cursor-pointer'>Edit</h2>
          </div>
        </div>
          )
        })
      } 
      </div>
    </div>
  )
}