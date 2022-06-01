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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    }
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(()=>Math.random()),
      borderColor: 'grey',
      backgroundColor: 'grey',
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
    }
  ],
};

export function LineChart() {
  return <Line height={180} options={options} data={data} />;
}
