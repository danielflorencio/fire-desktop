import { useState } from "react"
import Button from "../Button/Button"
export default function CiCalculator(){
    const [initialAmount, setinitialAmount] = useState('')
    const [monthlyInvestment, setmonthlyInvestment] = useState('')
    const [howLong, sethowLong] = useState('')
    const [result, setResult] = useState('')    
    
    return(
        <div className='box-content-container shadow-lg p-3 mb-5 bg-white rounded'>
            <h4>Compound Interest Calculator</h4>
            <form>
                <label>Initial value: <input type='number'></input></label>
                <label>Monthly Contribution: <input type='number'></input></label>
                <label>Monthly Yield: <input type='number'></input></label>
                <label>Time: <input type='number'></input></label>
                <button className="btn btn-primary">Call to action</button>
            </form>
        </div>
    )
}















// import {useState} from "react";
// export default function CIcalculator(){
//   // const [value, setValues] = useState('initial value)
//   const [initialAmount, setinitialAmount] = useState('')
//   const [monthlyInvestment, setmonthlyInvestment] = useState('')
//   const [howLong, sethowLong] = useState('')
//   const [result, setResult] = useState('')
//   const [totalAmount, setTotalAmount] = useState('')
//   function handleSubmit(e){
//     e.preventDefault();
//     console.log('before howlong ' + howLong)
//     console.log('before monthly investments ' + monthlyInvestment)
//     console.log('before initial amount ' + initialAmount)
//     // sethowLong(parseInt(howLong))
//     // setTotalAmount(parseFloat(initialAmount))
//     // setmonthlyInvestment(parseFloat(monthlyInvestment))
//     // setinitialAmount(parseFloat(initialAmount))
//     // const howLong = parseInt(howLong);
//     // const monthlyInvestment = parseFloat(monthlyInvestment);
//     // const initialAmount = parseFloat(initialAmount);
//     // const totalAmount = parseFloat(initialAmount);
    
//     for(let i = 0; i <= howLong; i++) {
//       setTotalAmount(totalAmount + monthlyInvestment)
//       console.log('The loop worked ' + i + ' times')
//       console.log('Total amount value = ' + totalAmount)
//       console.log('--------------------------------- ')
//       // totalAmount = totalAmount + monthlyInvestment;
//     }
//     setResult(
//       totalAmount
//       // howLong = parseInt(howLong),
//       // monthlyInvestment = parseFloat(monthlyInvestment),
//       // initialAmount = parseFloat(initialAmount),
//       // totalAmount = parseFloat(initialAmount),
      
//       // parseInt(howLong) *
//       // parseInt(monthlyInvestment) +
//       // parseInt(initialAmount)
//       // howLong*monthlyInvestment + initialAmount
//   )
//     console.log('after howlong ' + howLong)
//     console.log('after monthly investments ' + monthlyInvestment)
//     console.log('after initial amount ' + initialAmount)
//   }
//   // const HandleInputChange = (e) => {
//   //   const{}
//   // }

//   function handleInitialAmountChange(e){
//     setinitialAmount(e.target.value);
//   }
//   function handleHowLongChange(e){
//     sethowLong(e.target.value);
//   }
//   function handleMonthlyInvestmentsChange(e){
//     setmonthlyInvestment(e.target.value);
//   }

//   return(
//     <>
//       {/* <h1>form value: {this.state.value}</h1> */}
//       <div className="math-component">          
//         <form className="form" onSubmit={handleSubmit}> {/*https://stackoverflow.com/questions/45998744/react-this-state-is-undefined */}
//           <label>
//             Initial amount: 
//             <input type="number" name='initialAmount' value={initialAmount} onChange={handleInitialAmountChange} {/*label="initial Amount"*/}/>
//           </label>
//           <label>
//             Monthly Investments: 
//             <input className="input" type="number" name='monthly_investments' value={monthlyInvestment} onChange={handleMonthlyInvestmentsChange}/>
//           </label>
//           <label>
//             For how long: 
//             <input type="number" name='how_long' value={howLong} onChange={handleHowLongChange}/>
//           </label>
//           <button type="submit" className='button'>Submit</button>
//         </form>
//         <h1>response: {result}</h1>

//       </div>
//     </>

//   )
// }