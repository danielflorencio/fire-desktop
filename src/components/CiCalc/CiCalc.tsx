import { useState, useEffect, ChangeEvent, FC, FormEvent } from "react"
import { useMultiStepForm } from "../../customHooks/useMultiStepForm";
import CiGraph from '../AnswerGraph/CiGraph'

type FormData = {
    amount: number,
    investment: number,
    howLongM: number
}

const INITIAL_DATA: FormData = {
    amount: 0,
    investment: 0,
    howLongM: 0
}

export default function CiCalculator(){

    const [data, setData] = useState(INITIAL_DATA);
    const [result, setResult] = useState(0);

    function updateFields(fields: Partial<FormData>){ // The Partial type allows you to use only a partial version of another certain type.
        setData(prev => {
            return { ...prev, ...fields} // This function takes the previous data from the last field render and overrides that data with the new data.
        })
        console.log(data)
    }

    const { steps, currentStepIndex, step, isAnswerStep, back, next } = useMultiStepForm([
    <CiForm {...data} updateFields={updateFields}/>, 
    <CiGraph {...data} />]) // Passing the data to all components
 
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        next()
    }

    function handleSimulation(e: FormEvent){
        e.preventDefault()
    }

    // useEffect(() => {
    //     let resultCount = 0
    //     for (let i = 0; i < INITIAL_DATA.howLongM; i++){
    //         resultCount += INITIAL_DATA.amount*INITIAL_DATA.investment;
    //     }
    //     setResult(resultCount)
    //     console.log(result)
    // }, [data])

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

export type SimulationData = {
    amount: number,
    investment: number,
    howLongM: number
}

type SimulationFormProps = SimulationData & {
    updateFields: (fields: Partial<SimulationData>) => void 
}

export function CiForm({amount, howLongM, investment, updateFields} : SimulationFormProps){
    
    return(
        <>
            <label>Initial value: <input 
            type='number' 
            value={amount}
            onChange={e => updateFields({ amount: e.target.valueAsNumber })} 
            autoFocus 
            required></input></label>

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
        </>
    )
}