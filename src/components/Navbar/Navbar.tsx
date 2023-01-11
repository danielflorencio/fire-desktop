import CustomButton from '../RouterComponents/CustomButton'
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import {AiFillCalculator} from 'react-icons/ai'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
export default function Navbar(){
    return(
        <header>
        <div className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"/></svg> */}
              </a>
    
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <CustomButton to='/fire_advisor' name='Home' icon={<AiFillHome/>}/>
              <CustomButton to='/fire_advisor/expenses' name='Expenses' icon={<FaMoneyBillWave/>}/>
              <CustomButton to='/fire_advisor/calculators' name='Calculators' icon={<AiFillCalculator/>}/>
              <CustomButton to='/fire_advisor/stock-market' name='Stocks' icon={<BsFillFileBarGraphFill/>}/>
                {/* <li>
                  <a href="#" className="nav-link text-secondary">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"/></svg>
                    Home
                  </a>
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
        </header>
    )
}