import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
// import CiCalculator from './components/CiCalc/CiCalc';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes} from 'react-router-dom'
import CalculatorsPage from './components/CalculatorsPage/CalculatorsPage';
import CiCalculator from './components/CiCalc/CiCalc';
export default function App() {  
  return (
    <>
      <Sidebar/>
      <main className='overflow-auto'>
        <div className='main-content-container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='expenses' element={<ExpenseTracker/>}/>
            <Route path='calculators' element={<CalculatorsPage/>}/>
            <Route path='calculators/compound_interest_calculator' element={<CiCalculator/>}/>
            <Route path='calculators/simple_interest_calculator' element={<CiCalculator/>}/>
          </Routes>
        </div>
      </main>
    </>
  )
}