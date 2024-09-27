// import { BarChartProps } from "@constants/index.types";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";

Chart.register(...registerables, ChartDataLabels);

const BarChart: React.FC<BarChartProps> = ({
  labels,
  datasets,
  chartTitle,
}) => {
  const [selectedYear, setSelectedYear] = useState("This Year");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => {
    const year = currentYear - index;
    return { value: year, label: index === 0 ? "This Year" : year.toString() };
  });

  const data = {
    labels,
    datasets,
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: false,
          boxWidth: 14,
        },
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 2,
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <h2 className="font-bold text-[1.6rem]">{chartTitle}</h2>

        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border rounded-[0.4rem] p-1 outline-none cursor-pointer text-[1.2rem]"
        >
          {years.map(({ value, label }) => (
            <option key={value} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* <Bar data={data} options={options} plugins={[ChartDataLabels]} /> */}
    </div>
  );
};

export default BarChart;
