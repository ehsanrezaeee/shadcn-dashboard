import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CumulativePurchaseChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.map((item: any) => item.date),
    datasets: [
      {
        label: "Cumulative Purchases",
        data: data.map((item: any) => item.cumulativeAmount),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Some Charts" },
        },
      }}
    />
  );
};

export default CumulativePurchaseChart;
