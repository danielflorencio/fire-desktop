import './styles.css'
import MainTitle from '../Titles/MainTitle'
import SubTitle from '../Titles/SubTitle'
import { useState } from 'react'
import { getCurrentMonth } from '../../helpers/dateFilter'
// type Props = {
//     pageTitle: string;
//     subtitle: string;
// }
export default function HomePage(){
    


    return( 
        <>
            <MainTitle title='Welcome to the Fire Advisor.'/>
            {/* <SubTitle title='This is where your financial freedom begins.'/> */}

            {/* Show income, expenses and balance components.*/}
            {/* Show a component saying like. Following this route you're following right now, you're probably going to achieve financial independence in X years. (Here goes a phrase if the result is going good or not. Like, "Keep it up!" or "Hey, you're gonna take a while to FIRE that way. Click here to see somethings you can do to improve this results." or "You're not doing bad, but we think you might do even better if you follow some of the advice we have to give you. Click here to see.") */}
            <div style={{display: 'flex', width: '100%', height: '100%', gap: '2rem'}}>
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