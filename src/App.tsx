import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import CiCalculator from './components/CiCalc/CiCalc';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes} from 'react-router-dom'

function App() {
  // return(
  //   <main className='overflow-auto'>
  //     <div className='main-content-container'>
  //       <ExpenseTracker/>
  //     </div>
  //   </main>
  // )
  
  return (
    <>
      <Sidebar/>
      <main className='overflow-auto'>
        <div className='main-content-container'>
          <Routes>
            <Route path='/' element={<HomePage pageTitle='Welcome to the Fire Advisor.' subtitle='This is where your financial freedom begins.'/>}/>
            <Route path='expenses' element={<ExpenseTracker/>}/>
            <Route path='CompoundInterestCalculator' element={<CiCalculator/>}/>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
