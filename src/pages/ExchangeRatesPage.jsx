// pages/ExchangeRatesPage.jsx
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import QuickStats from "../components/ExchangeRates/QuickStats";
import RatesChart from "../components/ExchangeRates/RatesChart";
import RatesTable from "../components/ExchangeRates/RatesTable";
import ComparisonChart from "../components/ExchangeRates/ComparisonChart";
import TrendsChart from "../components/ExchangeRates/TrendsChart";

export default function ExchangeRatesPage() {
  const [activeTab, setActiveTab] = useState("rates");

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-6 -mt-10">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <TabButton
            active={activeTab === "rates"}
            onClick={() => setActiveTab("rates")}
          >
            Current Rates
          </TabButton>
          <TabButton
            active={activeTab === "comparison"}
            onClick={() => setActiveTab("comparison")}
          >
            Bank Comparison
          </TabButton>
          <TabButton
            active={activeTab === "trends"}
            onClick={() => setActiveTab("trends")}
          >
            Historical Trends
          </TabButton>
        </div>

        <QuickStats />

        {activeTab === "rates" && (
          <div className="space-y-8">
            <RatesChart />
            <RatesTable />
          </div>
        )}

        {activeTab === "comparison" && <ComparisonChart />}

        {activeTab === "trends" && <TrendsChart />}
      </div>
    </>
  );
}

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-gray-600 dark:text-gray-300 ${
      active ? "tab-active" : ""
    }`}
  >
    {children}
  </button>
);
