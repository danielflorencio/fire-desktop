import './App.css'
import Navbar from './components/Navbar';
import { Route, Router, Routes} from 'react-router-dom'
import Home from './pages/home';
import ExpenseTracker from './pages/expenseTracker';
import Tools from './pages/tools';
import CiCalculator from './pages/tools/components/CiCalc/CiCalc';
import SiCalculator from './pages/tools/components/SiCalc/SiCalc';
import StockMarket from './pages/StockMarket';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
export default function App() {  
  // const isSmallScreen = useMediaQuery({ query: '(max-width: 968px)' });
  return (
    <div className='app-container'>
      <Navbar>
        <main>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div className='main-content-container'>
            <Routes>
              <Route path='fire-desktop' element={<Home/>}/>
              <Route path='fire-desktop/expenses' element={<ExpenseTracker/>}/>
              <Route path='fire-desktop/calculators' element={<Tools/>}/>
              <Route path='fire-desktop/calculators/compound_interest_calculator' element={<CiCalculator/>}/>
              <Route path='fire-desktop/calculators/simple_interest_calculator' element={<SiCalculator/>}/>
              <Route path='fire-desktop/stock-market' element={<StockMarket/>}/>
            </Routes>
          </div>
          <PortfolioFooter/>
          </div>
        </main>
      </Navbar>
    </div>
  )
}