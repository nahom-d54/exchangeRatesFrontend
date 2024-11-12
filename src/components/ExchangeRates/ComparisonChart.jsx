// components/ExchangeRates/ComparisonChart.jsx
import { useEffect, useMemo, useRef } from "react";
import Chart from "chart.js/auto";

export default function ComparisonChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const majorCurrencyCodes = useMemo(
    () => ["USD($)", "EUR(€)", "GBP(£)", "JPY(¥)", "AED(د.إ)", "SAR(ر.س)"],
    []
  );

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["USD", "EUR", "GBP", "JPY", "CHF"],
        datasets: [
          {
            label: "Exchange Rate Comparison",
            data: [1.0, 0.85, 0.73, 110.25, 0.92],
            backgroundColor: [
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
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
            text: "Currency Comparison",
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
        Currency Comparison
      </h2>
      <div className="h-[300px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
