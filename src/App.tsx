import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {

  return (
    <>
      <Navbar/> 
      <main>
        <div className='main-content-container'>
          <h1>Test</h1>
          <Button variant='primary'>Primary</Button>
        </div>
      </main>
    </>
  )
}

export default App
