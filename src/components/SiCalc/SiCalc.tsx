import { useState, FormEvent } from "react"
import { useMultiStepForm } from "../../customHooks/useMultiStepForm";
import SiGraph from '../AnswerGraph/SiGraph'

type FormData = {
    amount: number,
    investment: number,
    interestRate: number,
    howLongM: number,
    interestTimeFrame: string,
    howLongTimeFrame: string
}

const INITIAL_DATA: FormData = {
    amount: 0,
    investment: 0,
    interestRate: 0,
    howLongM: 0,
    interestTimeFrame: '',
    howLongTimeFrame: ''
}

export default function SiCalculator(){

    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<FormData>){ // The Partial type allows you to use only a partial version of another certain type.
        setData(prev => {
            return {...prev, ...fields} // This function takes the previous data from the last field render and overrides that data with the new data.
        })
    }

    const { steps, currentStepIndex, step, isAnswerStep, back, next } = useMultiStepForm([
    <SiForm {...data} updateFields={updateFields}/>, 
    <SiGraph {...data} />]) // Passing the data to all components
 
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        next()
    }

    return(
        <div className='box-content-container shadow-lg p-3 mb-5 bg-white rounded'>
            <h4>Si Cal Step {currentStepIndex + 1} / {steps.length}</h4>
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

type SimulationFormProps = FormData & {
    updateFields: (fields: Partial<FormData>) => void 
}

export function SiForm({amount, howLongM, interestRate, interestTimeFrame, howLongTimeFrame, updateFields} : SimulationFormProps){   
    return(
        <>
            <label>Value invested: <input 
            type='number' 
            value={amount}
            onChange={e => updateFields({ amount: e.target.valueAsNumber })} 
            autoFocus 
            required></input></label>

            <label className="d-inline">Interest Rate: </label>
            <div className="d-flex">
                <input 
                type='number' 
                value={interestRate}
                onChange={e => updateFields({ interestRate: e.target.valueAsNumber })} 
                required></input>

                <select value={interestTimeFrame} onChange={e => updateFields({ interestTimeFrame: e.target.value})}>
                    <option value="annual">Annual</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            
            <label className="d-inline">Time: </label>
            <div className="d-flex">
                <input 
                type='number' 
                value={howLongM}
                onChange={e => updateFields({ howLongM: e.target.valueAsNumber })} 
                required></input>
                
                <select value={howLongTimeFrame} onChange={e => updateFields({ howLongTimeFrame: e.target.value})}>
                    <option value="annual">Annual</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <br/>
        </>
    )
}