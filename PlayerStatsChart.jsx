import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PlayerStatsChart = () => {
  // ✅ Example Player Data
  const data = {
    labels: ["John Smith", "Mike Johnson", "Chris Davis", "Jake Thompson", "David Lee"],
    datasets: [
      {
        label: "Home Runs",
        data: [3, 5, 4, 4, 2], // Example HR stats
        backgroundColor: ["#F87171", "#60A5FA", "#FBBF24", "#34D399", "#A78BFA"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  // ✅ Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Home Runs Per Player" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#ffffff" } },
      x: { ticks: { color: "#ffffff" } },
    },
  };

  return (
    <div className="bg-[#2f3827] p-6 rounded-lg shadow-md text-[#dbe0da]">
      <h2 className="text-xl font-bold mb-4 text-center">Player Home Runs</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PlayerStatsChart;
