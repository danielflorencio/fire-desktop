import {SimulationData} from '../CiCalc/CiCalc'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto'

ChartJS.register(CategoryScale); // https://www.youtube.com/watch?v=BM2nC16y4ck

export default function CiGraph({amount, investment, howLongM, interestRate}: SimulationData){
        
    let newAmountArray: number[] = [amount]
    
    for(let i = 0; i < howLongM; i++){
        let valueToConcat: number = newAmountArray[i] + newAmountArray[i]*interestRate/100 + investment;        
        newAmountArray = [...newAmountArray, valueToConcat]
    }

    console.log('new amount array values ', newAmountArray)
    
    let responseArray: string[] = []
    
    for(let i = 0; i < howLongM; i++){
      newAmountArray[i] = parseFloat(newAmountArray[i].toFixed(2));
      responseArray = [...responseArray, newAmountArray[i].toString() + ' - ']
    }
    
    console.log('Amount Array: ', newAmountArray)

    let arrayOfMonths: number[] = [0]
    for(let i = 0; i < howLongM; i++){
        arrayOfMonths = [...arrayOfMonths, i]
    }

    const ChartData = [
        {
          id: 1,
          labels: 0,
          amount: 80000
         },
        {
          id: 2,
          labels: 1,
          amount: 45677
        },
        {
          id: 3,
          labels: 2,
          amount: 78888,
        },
        {
          id: 4,
          labels: 3,
          amount: 90000,
        },
        {
          id: 5,
          labels: 4,
          amount: 4300,
        },
    ];

    const chartDataa = {
      labels: arrayOfMonths,
      datasets: [{
        label: 'my first line chart',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: newAmountArray,
      },
    ],
    };

    const [chartData, setChartData] = useState({
        labels: ChartData.map((data) => data.labels), // list of labels that represents each bar / line spot.
        datasets: [{
            label: 'Amount',
            data: ChartData.map((data) => data.amount)
        }] // 
    })

    return(
        <>
            <Line data={chartDataa} />
            {/* <h2 className="text-center">Here's a Graph</h2>
            <div>the amount invested is {responseArray}</div>
            <div>the investment was {investment}</div>
            <div>The time taken was {howLongM} months</div> */}
        </>
    )
}