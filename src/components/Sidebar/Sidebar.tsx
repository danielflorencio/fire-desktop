import './styles.css'
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import {AiFillCalculator, AiFillFire} from 'react-icons/ai'
import CustomLink  from '../CustomLink/CustomLink'

export default function Sidebar(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-width-280px overflow-hidden">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="16" height="16"><AiFillFire/></svg>
                <span className="fs-4">Fire</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <CustomLink to='/' name='Home' child={<AiFillHome/>}/>
            <CustomLink to='/expenses' name='Expenses' child={<FaMoneyBillWave/>}/>
            <CustomLink to='/calculators' name='Calculators' child={<AiFillCalculator/>}/>
            {/* <CustomLink to='/incomes' name='Incomes' child={<AiFillCalculator/>}/> */}
            {/* <CustomLink to='' name='Productivity Booster' child={}/> */}
            {/* <CustomLink to='' name='Feedback' child={}/> */}
            {/* <CustomLink to='' name='Stock Market' child={}/> */}
            {/* <CustomLink to='' name='Crypto Market' child={}/> */}
            {/* <CustomLink to='' name='Support us' child={}/> */}
            {/* <CustomLink to='' name='Charity' child={}/> */}
            </ul>
            <hr/>
            <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
            </div>
        </div>
    )
}