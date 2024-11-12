// components/ExchangeRates/TrendsChart.jsx
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function TrendsChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "USD/EUR",
            data: [0.85, 0.86, 0.84, 0.83, 0.85, 0.84],
            borderColor: "rgba(54, 162, 235, 1)",
            tension: 0.1,
          },
          {
            label: "USD/GBP",
            data: [0.73, 0.74, 0.72, 0.71, 0.73, 0.72],
            borderColor: "rgba(255, 99, 132, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Currency Trends",
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Currency Trends
      </h2>
      <div className="h-[300px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
