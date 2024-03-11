import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounHandel from './counter'
import Users from './user'
import Ux from './u'
import Post from './post'


function App() {
  function clickhandel() {
    alert('dd your life change')
  }
  const clickhandel2 = () => {
    alert('Bangladesg won')
  }
  return (
    <>
      <h3>React Core Concept Part-2</h3>

      <button onClick={clickhandel}>click me</button>
      <button onClick={clickhandel2}>click me again</button>
      <button onClick={() => { alert("Plese hat idjf") }}>click hate</button>
      <button onClick={function hadel() { alert('cholo namaj e jai') }}>click for praye</button>

      <CounHandel></CounHandel>
      <Users></Users>
      <Post></Post>
    </>
  )
}

export default App
