import CustomButton from '../RouterComponents/CustomButton'
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import {AiFillCalculator, AiFillFire} from 'react-icons/ai'
import './styles.css'
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
              <CustomButton to='/' name='Home' child={<AiFillHome/>}/>
              <CustomButton to='/expenses' name='Expenses' child={<FaMoneyBillWave/>}/>
              <CustomButton to='/calculators' name='Calculators' child={<AiFillCalculator/>}/>
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