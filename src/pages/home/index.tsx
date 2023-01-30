import './styles.css'
import {AiFillFire} from 'react-icons/ai'
import { IconContext } from "react-icons";
import BalanceInfo from './components/BalanceInfo'
export default function Home(){    
    return( 
        <>
            <div className='header-container'>
                <div className='message-container'>
                    <div className='logo-container'>
                        <IconContext.Provider value={{className: 'fire-logo'}}>
                            <AiFillFire style={{color: 'linear-gradient(#FC575E, #F7B42C)'}}/>
                        </IconContext.Provider>
                    </div>
                    <div className='welcome-message'><h3>Welcome to <span className='fire-color-gradient'>Fire</span>, your Financial Independence Advisor. </h3></div>
                </div>
                <div className='tips-container w-100'>There's no tips available for you at the moment. Keep using the app so we can analyze your data and provide you with the best valuable information as possible.</div>
            </div>
            <div className='d-flex h-100 w-100 mr-1 flex-wrap justify-content-around'>
                <div className="option-container">
                    <BalanceInfo title='Current Balance' status=''/>
                </div>
                <div className="option-container">
                    <h3>Next Month Previewed Balance</h3>
                    <p style={{color: 'green'}}>In development.</p>
                </div>
                <div className="option-container">
                    <h3>Next Year Previewed Balance</h3>
                    <p style={{color: 'green'}}>In development.</p>
                </div>
                <div className="option-container">
                    <h3>Your Networth has increased: </h3>
                    <p>X % since last month</p>
                    <p>Y % since last 6 months.</p>
                    <p>Z % since last year</p>
                    <p style={{color: 'green', marginTop: '2vh'}}>In development.</p>
                </div>
            </div>
        </>
    )
}