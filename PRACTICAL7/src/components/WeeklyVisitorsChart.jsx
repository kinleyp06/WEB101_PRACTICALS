import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { weeklyVisitors } from '../data/salesData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const WeeklyVisitorsChart = () => {
  const labels = weeklyVisitors.map(item => `Week ${item.week}`);
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Weekly Visitors',
        data: weeklyVisitors.map(item => item.visitors),
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ':';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default WeeklyVisitorsChart;
