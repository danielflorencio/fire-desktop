import {SimulationData} from '../SiCalc/SiCalc'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto'

ChartJS.register(CategoryScale); // https://www.youtube.com/watch?v=BM2nC16y4ck

export default function SiGraph({amount, investment, howLongM, interestRate, howLongTimeFrame, interestTimeFrame}: SimulationData){

    let newAmountArray: number[] = [amount]

    // TimeFrame Dictates at which spans of time the interest rate will be applied.
    // HowLongM Dictates for how long this investment will be applied. 


    let numberHowLongTimeFrame: number

    if(howLongTimeFrame === 'annual'){
      numberHowLongTimeFrame = 12
    } else{
      numberHowLongTimeFrame = 1
    }

    let numberInterestRateTimeFrame: number

    if(interestTimeFrame === 'annual'){
      numberInterestRateTimeFrame = 12
    } else{
      numberInterestRateTimeFrame = 1
    }


    // for (let i = 0; i < howLongM; i++){
    //   let valueToConcat: number = 
    // }



    for (let i = 0; i < howLongM; i++){
      let valueToConcat: number = newAmountArray[i] + newAmountArray[i]*interestRate/100 + investment;
    }

    for(let i = 0; i < howLongM; i++){
      let valueToConcat: number = newAmountArray[i] + newAmountArray[i]*interestRate/100 + investment;        
      newAmountArray = [...newAmountArray, valueToConcat]
    }
    
    for(let i = 0; i < howLongM; i++){
      newAmountArray[i] = parseFloat(newAmountArray[i].toFixed(2));
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