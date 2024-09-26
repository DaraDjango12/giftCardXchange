import { DoughnutChartProps } from "@constants/index.types";
import { Chart, ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-annotation";

Chart.register(ChartDataLabels);

type DoughnutData =
  | ChartData<"doughnut", number[], string>
  | (() => ChartData<"doughnut", number[], string>);

const DoughnutChart: React.FC<DoughnutChartProps & { data: DoughnutData }> = ({
  data,
}) => {
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      datalabels: {
        color: "white",
        font: { weight: "bold", size: 12, family: "poppins" },
        anchor: "end",
        align: "start",
        formatter: (value: number) => {
          return `${value.toFixed(0)}%`;
        },
      },
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div className="w-[25rem] h-[25rem]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
