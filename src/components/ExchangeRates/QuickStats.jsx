import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import {
  faDollarSign,
  faEuroSign,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetBestBuyRatesQuery } from "../../services/exchangeRate/exchangeRateApiSlice";

const QuickStats = () => {
  const importantCurrencies = ["USD($)", "EUR(€)", "GBP(£)", "USDT"];
  const { data: bestBuyRates, isLoading } = useGetBestBuyRatesQuery();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      id="quick-stats"
    >
      {/* Quick Stats */}

      {importantCurrencies.map((currency, index) => (
        <div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          key={currency}
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500 bg-opacity-10 ">
              <FontAwesomeIcon
                icon={
                  index === 0
                    ? faDollarSign
                    : index === 1
                    ? faEuroSign
                    : index === 2
                    ? faPoundSign
                    : faBitcoin
                }
                className="text-blue-500 text-2xl "
              />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">
                {currency}/ETB
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {isLoading ? (
                  <span role="status" className="max-w-sm animate-pulse">
                    <span className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></span>
                  </span>
                ) : (
                  bestBuyRates &&
                  bestBuyRates.result.find(
                    (rate) => rate.currencyCode === currency
                  )?.buyRate
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
