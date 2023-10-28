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
        // max: 10,
        // min:-10,
        ticks: {
          stepSize:1,
        
        },
        grid: {
          color: function(context){
            if(context?.tick.value === 0){
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
      enabled: true
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3, 8, 0,1,10],
      tension: 0.4,
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
interface LineChartProps {
  posts: PostResponse[]
}
export const LineChart: React.FC = () => {

  return (
    <>
    <Line options={options} data={data}/>
    </>
  )
}