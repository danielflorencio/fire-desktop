import { Button } from 'react-bootstrap';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import CiCalculator from './components/CiCalc/CiCalc';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Sidebar/>
      <main className='overflow-auto'>
        <div className='main-content-container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='expenses' element={<ExpenseTracker/>}/>
            <Route path='CompoundInterestCalculator' element={<CiCalculator/>}/>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
