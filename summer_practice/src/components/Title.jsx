import React from 'react'
import "../App.css"
import { useState, useEffect } from "react"

function Title(props) {
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then((json) => setList(json))
  }, [])
  
  return (
    <div>
      <div>To Do List</div>
      <ul>
        {list.map((ele)=>(
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Title;