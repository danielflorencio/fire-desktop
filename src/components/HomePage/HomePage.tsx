import './styles.css'
import MainTitle from '../Titles/MainTitle'
import SubTitle from '../Titles/SubTitle'
import { useState } from 'react'
import { getCurrentMonth } from '../../helpers/dateFilter'
import { useSelector } from 'react-redux';
import { RootState } from '../../store'
import {AiFillFire} from 'react-icons/ai'
import { IconContext } from "react-icons";
export default function HomePage(){
    
    // const totalBalance = useSelector<RootState, number>(state => state.BalanceState);

    return( 
        <>
            {/* <MainTitle title='Welcome to the Fire Advisor.'/> */}
            {/* <SubTitle title='This is where your financial freedom begins.'/> */}

            {/* Show income, expenses and balance components.*/}
            {/* Show a component saying like...
            Following this route you're following right now, you're probably going to achieve financial independence in X years. 
            (Here goes a phrase if the result is going good or not. 
            Like, "Keep it up!" or "Hey, you're gonna take a while to FIRE that way. 
            Click here to see somethings you can do to improve this results." 
            or 
            "You're not doing bad, but we think you might do even better if you follow some of the advice we have to give you. Click here to see.") */}
            <div className='header-container'>
                <div className='message-container'>
                    <div className='logo-container'>
                        <IconContext.Provider value={{className: 'fire-logo'}}>
                            <AiFillFire style={{color: 'linear-gradient(#FC575E, #F7B42C)'}}/>
                        </IconContext.Provider>
                    </div>
                    <div className='welcome-message'><h3>Welcome to <span className='fire-color-gradient'>Fire</span>, your Financial Independence Advisor. </h3></div>
                </div>
                <div className='tips-container'>There's no tips available for you at the moment. Keep using the app so we can analyze your data and provide you with the best valuable information as possible.</div>
            </div>
            <div className='user-data-information-container'>
                <div className="option-container">
                    <h3>Current Balance</h3>
                    <p>U$ 00,00</p>
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