import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "chart.js/auto";

import { useEffect, useMemo, useRef } from "react";
import { useGetBestBuyRatesQuery } from "../../services/exchangeRate/exchangeRateApiSlice";

const RatesChart = () => {
  const ratesCtx = useRef(null);
  const chartInstance = useRef(null);
  const majorCurrencyCodes = useMemo(
    () => ["USD($)", "EUR(€)", "GBP(£)", "JPY(¥)", "AED(د.إ)", "SAR(ر.س)"],
    []
  );

  const { data: bestBuyRate } = useGetBestBuyRatesQuery();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = ratesCtx.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: majorCurrencyCodes,
        datasets: [
          {
            label: "BuyRate",
            data: majorCurrencyCodes.map(
              (code) =>
                bestBuyRate?.result.find((rate) => rate.currencyCode === code)
                  ?.buyRate || 0
            ),
            backgroundColor: "rgba(59, 130, 246, 0.5)",
            borderColor: "rgb(59, 130, 246)",
            borderWidth: 1,
            tension: 0.1,
          },
          {
            label: "SellRate",
            data: majorCurrencyCodes.map(
              (code) =>
                bestBuyRate?.result.find((rate) => rate.currencyCode === code)
                  ?.sellRate || 0
            ),
            backgroundColor: "rgba(246, 59, 130, 0.5)",
            borderColor: "rgb(246, 59, 130)",
            borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [bestBuyRate?.result, majorCurrencyCodes, ratesCtx]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Major Currencies Comparison
        </h2>
        <button
          onClick={() => alert("Exporting data...")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" /> Export
        </button>
      </div>
      <div className="h-[400px]">
        <canvas id="ratesChart" ref={ratesCtx}></canvas>
      </div>
    </div>
  );
};

export default RatesChart;
