import {SimulationData} from '../CiCalc/CiCalc'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto'

ChartJS.register(CategoryScale); // https://www.youtube.com/watch?v=BM2nC16y4ck

export default function CiGraph({amount, investment, howLongM, interestRate}: SimulationData){
        
    let newAmountArray: number[] = [amount]
    
    for(let i = 0; i < howLongM; i++){
        let valueToConcat: number = newAmountArray[i] + newAmountArray[i]*interestRate/100 + investment;        
        newAmountArray = [...newAmountArray, valueToConcat]
    }

    // let responseArray: string[] = []
    
    for(let i = 0; i < howLongM; i++){
      newAmountArray[i] = parseFloat(newAmountArray[i].toFixed(2));
      // responseArray = [...responseArray, newAmountArray[i].toString() + ' - ']
    }
    
    let arrayOfMonths: number[] = [0]
    for(let i = 0; i < howLongM; i++){
        arrayOfMonths = [...arrayOfMonths, i]
    }

    const chartData = {
      labels: arrayOfMonths,
      datasets: [{
        label: 'my first line chart',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: newAmountArray,
      },],
    };

    return <Line data={chartData} />
}