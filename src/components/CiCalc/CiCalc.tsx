import { useState, ChangeEvent, FC, FormEvent } from "react"
import { useMultiStepForm } from "../../customHooks/useMultiStepForm";
import CiGraph from '../AnswerGraph/CiGraph'

type FormData = {
    initialAmount?: number,
    monthlyInvestment?: number,
    howLongM?: number,
    result?: number
}

const INITIAL_DATA: FormData = {
    initialAmount: 0,
    monthlyInvestment: 0,
    howLongM: 0,
    result: 0
}




// export default function CiCalculator({initialAmount}: FormData){
export default function CiCalculator(){

    const [data, setData] = useState(INITIAL_DATA)

    // const [result, setResult] = useState(0)
    // const [howLong, sethowLong] = useState(0)


    function updateFields(fields: Partial<FormData>){ // The Partial type allows you to use only a partial version of another certain type.
        setData(prev => {
            return { ...prev, ...fields} // This function takes the previous data from the last field render and overrides that data with the new data.
        })
    }

    const { steps, currentStepIndex, step, isAnswerStep, back, next } = useMultiStepForm([
    <CiForm {...data} updateFields={updateFields}/>, 
    <CiGraph {...data}/>]) // Passing the data to all components
 
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()

        setData()
        // console.log(INITIAL_DATA.initialAmount)
        // setResult((INITIAL_DATA.initialAmount)*howLong)
        
        
        next()
    }

    function handleSimulation(e: FormEvent){
        e.preventDefault()
    }

    return(
        <div className='box-content-container shadow-lg p-3 mb-5 bg-white rounded'>
            <h4>Ci Cal Step {currentStepIndex + 1} / {steps.length}</h4>
            {currentStepIndex === 0 ? (
            <form onSubmit={handleSubmit}>
                {step}
                <button className='btn btn-primary' type='submit'>Do it</button>
            </form>
            ) : (
                <>
                {step}
                <button className='btn btn-primary' onClick={back}>return</button>
                </>
                )
            
            }                        
        </div>
    )
}


type SimulationData = {
    initialAmount?: number,
    monthlyInvestment?: number,
    howLongM?: 0,
    result?: 0    
}

export type SimulationFormProps = SimulationData & {
    updateFields: (fields: Partial<SimulationData>) => void 
}

export function CiForm({initialAmount, updateFields} : SimulationFormProps){
    
    return(
        <label>Initial value: <input 
        type='number' 
        value={initialAmount}
        onChange={e => updateFields({ initialAmount: e.target.valueAsNumber })} 
        autoFocus 
        required></input></label>
         // <button type='submit' className="btn btn-primary">Call to action</button>
    )
}




interface Props {
    result: number;
    months: number;
}
export const Answer: FC<Props> = ({result, months}) => {

    // The piece of code below sets the type of the state.

    const [howGood, setHowGood] = useState<string | null>("Great") // Using '| null' on the type makes it so the null stype is also accepted, even though the state type is not boolean.

    return (
        <div>
            <h2>The result is {result}</h2>
            <h2>The time taken was {months} months</h2>
        </div>
    )
}
































// function CiForm({initialAmount} : SimulationFormProps){
    




    
    // const [data, setData] = useState(INITIAL_DATA)
    // let [initialAmount, setinitialAmount] = useState<number>(0)
    // let [monthlyInvestment, setmonthlyInvestment] = useState<number>(0)
    // let [howLong, sethowLong] = useState<number>(0)
    // let [result, setResult] = useState<number>(0)
    // let [stringInitialAmount, setStringInitialAmount] = useState<string>('')
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setinitialAmount(event.target.value)
    // }



    // const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     setStringInitialAmount(e.target.value);
    //     setinitialAmount(parseFloat(stringInitialAmount))
    //     setResult(initialAmount*2);

    // }

    // function handleinitialAmountChange(e: InputEvent){
//     //     setinitialAmount(e.target.value);
//     // }

//     function handleSubmit(e: FormEvent){
//         e.preventDefault()
//         Next()
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Initial value: <input type='number' autoFocus required></input></label>
//             <label>Monthly Contribution: <input type='number' required></input></label>
//             <label>Monthly Yield: <input type='number' required></input></label>
//             <label>Time: <input type='number' required></input></label>
//             <button type='submit' className="btn btn-primary">Call to action</button>
//         </form>
//     )
// }




// interface Props {
//     result: number;
//     months: number;
// }
// export const Answer: FC<Props> = ({result, months}) => {

//     // The piece of code below sets the type of the state.

//     const [howGood, setHowGood] = useState<string | null>("Great") // Using '| null' on the type makes it so the null stype is also accepted, even though the state type is not boolean.

//     return (
//         <div>
//             <h2>The result is {result}</h2>
//             <h2>The time taken was {months} months</h2>
//         </div>
//     )
// }




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