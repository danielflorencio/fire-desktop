import {SimulationData} from '../CiCalc/CiCalc'
import useState from 'react'


type resultType = {
    amountArray: number[];
}


export default function CiGraph({amount, investment, howLongM}: SimulationData){
    
    const [amountArray, setAmountArray] = useState([amount]);
    
    return(
        <>
            <h2 className="text-center">Here's a Graph</h2>
            <div>the amount invested is {amount}</div>
            <div>the investment was {investment}</div>
            <div>The time taken was {howLongM} months</div>
        </>
    )
}