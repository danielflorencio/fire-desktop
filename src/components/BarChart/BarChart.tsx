import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
export default function BarChart({chartData}: any){
    return <Bar data={chartData}/>
}