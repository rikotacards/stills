import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PostResponse } from '../../firebase/posts';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


export const options = {
  scales: {
   
    y:

    {
      beginAtZero: true,
      // max: 10,
      // min: -10,
      ticks: {
        stepSize: 1,

      },
      grid: {
        color: function (context) {
          if (context?.tick.value === 0) {
            return 'white'
          }
        }
      }


    }

  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltip: {
      enabled: true,
      interaction: {
        intersect: false,
        mode: 'nearest',
      },
    },
    
  },
};

const labels = ['30 Oct', 'Nov 1', 'Nov 2', 'Nov 3', 'Nov 4', 'Nov 5', 'Nov 6'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Mood',
      data: [0,-1, -2, -3, -8, 5, -10],
      tension: 0.3,
      fill: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if(!chartArea){
          return null
        }
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, 'rgba(0, 225, 0, 0.9)');
    gradient.addColorStop(0, 'rgba(125, 0, 0, 0)');
    const red = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    red.addColorStop(1, 'rgba(0, 100, 0, 0)');
    red.addColorStop(0, 'rgba(225, 0, 0, 1)');

        return {
          target: 'origin',
          above: gradient,
          below: red
        }
      },
      backgroundColor: 'white',
      yAxisID: 'y',
      borderWidth: 0,
      borderColor: 'rgb(255, 255, 255)',
     
    },
  ],
};
interface LineChartProps {
  posts: PostResponse[]
}
export const LineChart: React.FC = () => {

  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}