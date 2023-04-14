import './styles.scss'
import {RxHamburgerMenu} from 'react-icons/rx'
import { IconContext } from 'react-icons'
import { ReactNode, useState } from 'react'
import Sidebar from '../Sidebar';
export default function Navbar({children}: { children: ReactNode; }){

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function changeNavbarState(){
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true);
        }
    }

    return(
        <div style={{display: 'flex', width: '100%'}}>
            <div className={isOpen ? 'sidebar-move-right sidebar' : ' sidebar sidebar-move-left'}>
            <Sidebar isOpen={isOpen}/>
            </div>
            <div style={{width: '100%'}}>
                <header className='upper-navbar'>
                    <div onClick={() => {changeNavbarState()}}>
                        <IconContext.Provider value={{className: 'icon cursor-pointer'}}>
                            <RxHamburgerMenu/>
                        </IconContext.Provider>
                    </div>
                    <img src="https://github.com/mdo.png" alt="" className="icon profile-icon"/>
                </header>
                {children}
            </div>
        </div>



        // <header>
        // <div className="">
        //     <div className="">
        //       <ul className="">
        //       <CustomButton to='/fire_advisor' name='Home' icon={<AiFillHome/>}/>
        //       <CustomButton to='/fire_advisor/expenses' name='Expenses' icon={<FaMoneyBillWave/>}/>
        //       <CustomButton to='/fire_advisor/calculators' name='Calculators' icon={<AiFillCalculator/>}/>
        //       <CustomButton to='/fire_advisor/stock-market' name='Stocks' icon={<BsFillFileBarGraphFill/>}/>
        //       </ul>
        //     </div>
        // </div>
        // </header>
    )
}



// <header>
// <div className="py-2 text-bg-dark">
//     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//       <CustomButton to='/fire_advisor' name='Home' icon={<AiFillHome/>}/>
//       <CustomButton to='/fire_advisor/expenses' name='Expenses' icon={<FaMoneyBillWave/>}/>
//       <CustomButton to='/fire_advisor/calculators' name='Calculators' icon={<AiFillCalculator/>}/>
//       <CustomButton to='/fire_advisor/stock-market' name='Stocks' icon={<BsFillFileBarGraphFill/>}/>
//         {/* <li>
//           <a href="#" className="nav-link text-secondary">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"/></svg>
//             Home
//           </a>
//         </li>
//         */}
//       </ul>
//     </div>
// </div>
// </header>