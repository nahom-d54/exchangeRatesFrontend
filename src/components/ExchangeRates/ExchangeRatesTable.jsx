import moment from "moment/moment";
import { useGetBestBuyRatesQuery } from "../../services/exchangeRate/exchangeRateApiSlice";

const ExchangeRatesTable = () => {
  const { data: bestBuyRate, isLoading } = useGetBestBuyRatesQuery();

  return (
    <div className="mb-8" data-aos="fade-up">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white items-center">
            Best Buy Rate{" "}
            <span className="text-[8px] bg-indigo-500 p-1 rounded-md shadow-lg shadow-indigo-500 cursor-pointer">
              ETB
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full" id="ratesTable">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Bank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Currency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Buy Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Sell Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              {/*<!-- Table content -->*/}
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {isLoading &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <tr className="max-w-sm animate-pulse" key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        <div className="px-4 py-2 bg-gray-900 h-2 dark:bg-gray-700 rounded-sm"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        <div className="px-4 py-2 bg-gray-900 h-2 dark:bg-gray-700 rounded-sm"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        <div className="px-4 py-2 bg-gray-900 h-2 dark:bg-gray-700 rounded-sm"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        <div className="px-4 py-2 bg-gray-900 h-2 dark:bg-gray-700 rounded-sm"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        <div className="px-4 py-2 bg-gray-900 h-2 dark:bg-gray-700 rounded-sm"></div>
                      </td>
                    </tr>
                  ))}
                {bestBuyRate &&
                  bestBuyRate.result.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        {item.bank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        {item.currencyCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        {item.buyRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        {item.sellRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-300">
                        {moment(item.date).format("MMM Do YY, h:mm a")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <div
            className="mt-4 flex justify-between items-center"
            id="pagination"
          >
            {/* <!-- Populated dynamically --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRatesTable;
