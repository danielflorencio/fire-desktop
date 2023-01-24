import { useState, FormEvent } from "react"
import { useMultiStepForm } from "../../customHooks/useMultiStepForm";
import CiGraph from '../AnswerGraph/CiGraph'

export type FormData = {
    amount: number,
    investment: number,
    interestRate: number,
    howLongM: number
}

const INITIAL_DATA: FormData = {
    amount: 0,
    investment: 0,
    interestRate: 0,
    howLongM: 0
}

export default function CiCalculator(){

    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<FormData>){ // The Partial type allows you to use only a partial version of another certain type.
        setData(prev => {
            return { ...prev, ...fields} // This function takes the previous data from the last field render and overrides that data with the new data.
        })
    }

    const { steps, currentStepIndex, step, isAnswerStep, back, next } = useMultiStepForm([
    <CiForm {...data} updateFields={updateFields}/>, 
    <CiGraph {...data} />])
 
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        next()
    }

    return(
        <>
            {currentStepIndex === 0 ? (
            <div className="shadow-lg p-3 mb-5 bg-white rounded forms-container">
            <form onSubmit={handleSubmit}>
                {step}
                <button className='btn btn-primary' type='submit'>Simulate</button>
            </form>
            </div>
            ) : (
                <div className="h-75 w-75 d-flex align-items-center justify-content-center flex-column gap-5">
                {step}
                <button className='btn btn-primary' onClick={back}>New Simulation</button>
                </div>
                )
            }                        
        </>
    )
}

type SimulationFormProps = FormData & {
    updateFields: (fields: Partial<FormData>) => void 
}

export function CiForm({amount, howLongM, investment, interestRate, updateFields} : SimulationFormProps){
    
    return(
        <div>
            <p className="mb-4 text-center" style={{margin: '1vh 1vw'}}><strong>Compound Interest Calculator.</strong></p>
            <div className="form-item">
                <label>Initial value: </label>

                <input className="" 
                type='number' 
                value={amount}
                onChange={e => updateFields({ amount: e.target.valueAsNumber })} 
                autoFocus 
                required></input>
            </div>

            <div className="form-item">
            <label>Time: </label> 
            <input 
            type='number' 
            value={howLongM}
            onChange={e => updateFields({ howLongM: e.target.valueAsNumber })} 
            required></input>
            </div>

            <div className="form-item">
            <label>Monthly Investment: </label> 
            <input 
            style={{display: 'block'}}
            type='number' 
            value={investment}
            onChange={e => updateFields({ investment: e.target.valueAsNumber })} 
            required></input>
            </div>

            <div className="form-item">
            <label>Interest Rate: </label>
            <input 
            type='number' 
            value={interestRate}
            onChange={e => updateFields({ interestRate: e.target.valueAsNumber })} 
            required></input>
            </div>
        </div>
    )
}