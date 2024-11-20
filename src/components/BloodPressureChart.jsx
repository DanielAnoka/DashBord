import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const BloodPressureChart = () => {
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 140, 160, 130, 150, 160],
        borderColor: "#ec4899",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        pointBackgroundColor: "#ec4899",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: [80, 85, 78, 82, 75, 78],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        pointBackgroundColor: "#6366f1",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20 },
        grid: {
          color: "#e5e5e5",
        },
      },
    },
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg max-w-5xl mx-auto">
      <div className="flex items-center gap-x-60 mb-4">
        <h2 className="text-lg font-semibold">Blood Pressure</h2>
        <select className="text-sm bg-transparent text-gray-600 focus:outline-none">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="flex flex-row space-x-6 items-center">
        <div className="flex-1">
          <Line data={data} options={options} />
        </div>

        <div className="flex flex-col space-y-3 self-start">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-[#E66FD2] rounded-full"></span>
            <p className="text-[#072635] font-bold">Systolic</p>
          </div>
          <p className="text-2xl font-bold">160</p>
          <p className="text-[13px] text-gray-500 flex items-center whitespace-nowrap border-b pb-2 mb-2">
            <img
              src="/assets/icons/ArrowUp.svg"
              className="mr-2"
              alt="Arrow Icon"
            />
            Higher than Average
          </p>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-[#8C6FE6] rounded-full"></span>
            <p className="text-[#072635] font-bold">Diastolic</p>
          </div>
          <p className="text-2xl font-bold">78</p>
          <p className="text-[13px] text-gray-500 flex items-center whitespace-nowrap">
            <img
              src="/assets/icons/ArrowDown.svg"
              className="mr-2"
              alt="Arrow Icon"
            />
            Lower than Average
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
