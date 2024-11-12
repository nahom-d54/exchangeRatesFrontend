import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex space-x-4 mb-6">
    {["rates", "comparison", "trends"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-gray-600 dark:text-gray-300 ${
          activeTab === tab ? "tab-active" : ""
        }`}
      >
        {tab === "rates"
          ? "Current Rates"
          : tab === "comparison"
          ? "Bank Comparison"
          : "Historical Trends"}
      </button>
    ))}
  </div>
);

export default Tabs;
