import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes} from 'react-router-dom'
import CalculatorsPage from './components/CalculatorsPage/CalculatorsPage';
import CiCalculator from './components/CiCalc/CiCalc';
import SiCalculator from './components/SiCalc/SiCalc';
import { useMediaQuery } from 'react-responsive';
import Navbar from './components/Navbar/Navbar';
export default function App() {  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 968px)' });

  return (
    <div className='app-container'>
      {isSmallScreen ? <Navbar/> : <Sidebar/>}
      <main className={isSmallScreen ? '' : 'overflow-auto'}>
        <div className='main-content-container'>
          <Routes>
            <Route path='fire_advisor' element={<HomePage/>}/>
            <Route path='expenses' element={<ExpenseTracker/>}/>
            <Route path='calculators' element={<CalculatorsPage/>}/>
            <Route path='calculators/compound_interest_calculator' element={<CiCalculator/>}/>
            <Route path='calculators/simple_interest_calculator' element={<SiCalculator/>}/>
          </Routes>
        </div>
      </main>
    </div>
  )
}