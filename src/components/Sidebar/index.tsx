import { AiFillHome, AiFillCalculator, AiFillFire } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import CustomLink  from '../RouterComponents/CustomLink'
export default function Sidebar({isOpen}: {isOpen: boolean}){
    return(
        <div style={{ width: '100%' }} className="d-flex flex-column flex-shrink-0 p-3 h-100 text-bg-dark overflow-hidden">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="16" height="16"><AiFillFire/></svg>
                <span className="fs-4">Fire</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <CustomLink to='/fire-desktop' name='Home' icon={<AiFillHome/>}/>
            <CustomLink to='/fire-desktop/expenses' name='Expenses' icon={<FaMoneyBillWave/>}/>
            <CustomLink to='/fire-desktop/calculators' name='Calculators' icon={<AiFillCalculator/>}/>
            <CustomLink to='/fire-desktop/stock-market' name='Stock Market' icon={<BsFillFileBarGraphFill/>}/>
            </ul>
            <hr/>
        </div>
    )
}