import { Button } from 'react-bootstrap';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import CiCalculator from './components/CiCalc/CiCalc';
function App() {

  return (
    <>
      <Sidebar/> 
      <main>
        <div className='main-content-container'>
          <CiCalculator/>
        </div>
      </main>
    </>
  )
}

export default App
