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
import IndexStockMarket from './components/StockMarket/IndexStockMarket';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
// import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
export default function App() {  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 968px)' });

  return (
    <div className='app-container'>
      {isSmallScreen ? <Navbar/> : <Sidebar/>}
      <main className={isSmallScreen ? '' : 'overflow-auto'}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div className='main-content-container'>
          <Routes>
            <Route path='fire_advisor' element={<HomePage/>}/>
            <Route path='fire_advisor/expenses' element={<ExpenseTracker/>}/>
            <Route path='fire_advisor/calculators' element={<CalculatorsPage/>}/>
            <Route path='fire_advisor/calculators/compound_interest_calculator' element={<CiCalculator/>}/>
            <Route path='fire_advisor/calculators/simple_interest_calculator' element={<SiCalculator/>}/>
            <Route path='fire_advisor/stock-market' element={<IndexStockMarket/>}/>
          </Routes>
        </div>
        <PortfolioFooter/>
        </div>
      </main>
    </div>
  )
}