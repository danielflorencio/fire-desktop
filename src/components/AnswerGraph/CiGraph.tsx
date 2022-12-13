import {SimulationData} from '../CiCalc/CiCalc'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function CiGraph({amount, investment, howLongM, interestRate}: SimulationData){
    
    const [amountArray, setAmountArray] = useState<number[]>([amount]);
    
    for(let i = 0; i < howLongM; i++){
        let valueToConcat = amountArray[amountArray.length -1] + (amountArray[amountArray.length - 1] + investment)*(interestRate/100);
        setAmountArray([...amountArray, valueToConcat]);
    }
    
    let arrayOfMonths = [0]
    for(let i = 0; i < howLongM; i++){
        arrayOfMonths =  [...arrayOfMonths, i]
    }

    const [chartData, setChartData] = useState({
        labels: arrayOfMonths, // list of labels that represents each bar / line spot.
        datasets: [{
            label: 'Amount at the time',
            data: amountArray
        }] // 
    })

    console.log('amount array ', amountArray)
    console.log('array of months ', arrayOfMonths)
    return(
        <>
            <Bar data={chartData} />
            {/* <h2 className="text-center">Here's a Graph</h2>
            <div>the amount invested is {amount}</div>
            <div>the investment was {investment}</div>
            <div>The time taken was {howLongM} months</div> */}
        </>
    )
}