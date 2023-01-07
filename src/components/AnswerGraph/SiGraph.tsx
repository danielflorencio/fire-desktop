import { Line } from 'react-chartjs-2'
import { FormData } from '../SiCalc/SiCalc';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto'

ChartJS.register(CategoryScale); // https://www.youtube.com/watch?v=BM2nC16y4ck

export default function SiGraph({amount, investment, howLongM, interestRate, howLongTimeFrame, interestTimeFrame}: FormData){

    let newAmountArray: number[] = [amount]

    if(howLongTimeFrame === 'annual' && interestTimeFrame === 'monthly'){
      howLongM = howLongM*12
    } else if (howLongTimeFrame === 'monthly' && interestTimeFrame === 'annual') {
      if(howLongM < 12){
        return(
          <div>
            In order for you to make money through a simple interest investment, the period through which your money is going to be invested must be bigger than the minimum amount of time for the investment to yield some dividends. 
          </div>
        )
      } 
    }

    for(let i = 0; i < howLongM; i++){
      let valueToConcat: number = newAmountArray[i] + newAmountArray[0]*interestRate/100
      newAmountArray = [...newAmountArray, valueToConcat]
    }

    let arrayOfMonths: number[] = [0]
    for(let i = 0; i < howLongM; i++){
      arrayOfMonths = [...arrayOfMonths, i + 1]
    }

    const chartData = {
      labels: arrayOfMonths,
      datasets: [{
        label: 'Simple Interest Chart',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: newAmountArray,
      },],
    };

    return <Line data={chartData}/>
}