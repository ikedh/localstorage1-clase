import { useState } from 'react'
import './App.css'

function App() {
 
  const [text,setText]= useState(
    window.localStorage.getItem("text")
  )

  const setLocalStorage = value =>{
    try {
      setText(value)
      window.localStorage.setItem("text",value)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <h1>Local Storage</h1>
      <textarea 
          placeholder='Ingresar Comentario'
          value={text}
          onChange={e=>setLocalStorage(e.target.value)}
      />
      <button>Postear</button>
    </>
  )
}

export default App
