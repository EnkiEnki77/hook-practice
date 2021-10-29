import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'



function App() {
  

  const [resourceType, setResourceType] = useState('todos')
  const [items, setItems] = useState([])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  console.log(items)

  return (
    <div className = 'App'>
     <div>
        <button onClick={()=>{setResourceType('todos')}}>Todo</button>
        <button onClick={()=>{setResourceType('comments')}}>Comment</button>
        <button onClick={()=>{setResourceType('posts')}}>Post</button>
      </div>
      <h1>{resourceType}</h1>
      <div className='counter'>
        <h2>data count:</h2>
        <h2>{items.length}</h2>
      </div>

      {items.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}
    </div>
  )
}

export default App
