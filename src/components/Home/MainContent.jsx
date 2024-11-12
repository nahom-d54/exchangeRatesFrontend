import { useState } from "react";
import Tabs from "./Tabs";
import QuickStats from "../ExchangeRates/QuickStats";
import RatesChart from "../ExchangeRates/RatesChart";
import ExchangeRatesTable from "../ExchangeRates/ExchangeRatesTable";
import Pagination from "./Pagination";
import FiltersModal from "../Modals/FiltersModal";
import CurrencyConverterModal from "../Modals/CurrencyConverterModal";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("rates");

  return (
    <div className="container mx-auto px-6 -mt-10">
      <CurrencyConverterModal />

      <FiltersModal />
      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Quick Stats */}
      <QuickStats />

      {/* Content Sections */}
      {activeTab === "rates" && (
        <div className="space-y-8">
          {/* Rates Chart */}
          <RatesChart />
        </div>
      )}

      {activeTab === "comparison" && (
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Bank Comparison
            </h2>
            <div className="h-[500px]">
              <canvas id="comparisonChart"></canvas>
            </div>
          </div>
        </div>
      )}

      {activeTab === "trends" && (
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Historical Trends
            </h2>
            <div className="h-[500px]">
              <canvas id="trendsChart"></canvas>
            </div>
          </div>
        </div>
      )}
      <div className="h-8"></div>
      {/* Exchange Rates Table */}
      <ExchangeRatesTable />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default MainContent;
