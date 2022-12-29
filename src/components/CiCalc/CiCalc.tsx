import { useState, FormEvent } from "react"
import { useMultiStepForm } from "../../customHooks/useMultiStepForm";
import CiGraph from '../AnswerGraph/CiGraph'

type FormData = {
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
    <CiGraph {...data} />]) // Passing the data to all components
 
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        next()
    }

    return(
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>
            <h4>Ci Calc Step {currentStepIndex + 1} / {steps.length}</h4>
            {currentStepIndex === 0 ? (
            <form onSubmit={handleSubmit}>
                {step}
                <button className='btn btn-primary ' type='submit'>Do it</button>
            </form>
            ) : (
                <>
                {step}
                <button className='btn btn-primary ' onClick={back}>return</button>
                </>
                )
            }                        
        </div>
    )
}

export type SimulationData = {
    amount: number,
    investment: number,
    howLongM: number,
    interestRate: number
}

type SimulationFormProps = SimulationData & {
    updateFields: (fields: Partial<SimulationData>) => void 
}

export function CiForm({amount, howLongM, investment, interestRate, updateFields} : SimulationFormProps){
    
    return(
        <>
            <div className="row">
                <div className="col-xs-7">
                    <label><h4>Initial value:</h4></label>
                </div>
                <div className="col-xs-5">
                    <input className="form-control" 
                    type='number' 
                    value={amount}
                    onChange={e => updateFields({ amount: e.target.valueAsNumber })} 
                    autoFocus 
                    required></input>
                </div>  
            </div>
            <label>Time: <input 
            type='number' 
            value={howLongM}
            onChange={e => updateFields({ howLongM: e.target.valueAsNumber })} 
            required></input></label>

            <label>Monthly Investment: <input 
            type='number' 
            value={investment}
            onChange={e => updateFields({ investment: e.target.valueAsNumber })} 
            required></input></label>

            <label>Interest Rate: <input 
            type='number' 
            value={interestRate}
            onChange={e => updateFields({ interestRate: e.target.valueAsNumber })} 
            required></input></label>
        </>
    )
}