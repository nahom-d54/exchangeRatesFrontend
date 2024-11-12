// components/ExchangeRates/ExchangeRateCard.jsx
export default function ExchangeRateCard({
  currency,
  rate,
  change,
  timestamp,
}) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {currency}
          </h3>
          <p className="text-2xl font-bold mt-2">{rate}</p>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
            isPositive
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}%
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Last updated: {new Date(timestamp).toLocaleString()}
      </p>
    </div>
  );
}
