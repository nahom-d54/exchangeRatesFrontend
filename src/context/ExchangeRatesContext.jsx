// context/ExchangeRatesContext.jsx
import { createContext, useContext, useReducer } from "react";

const ExchangeRatesContext = createContext();

const initialState = {
  rates: {},
  baseCurrency: "USD",
  selectedCurrencies: ["EUR", "GBP", "JPY", "CHF"],
  timeRange: "1D",
  isLoading: false,
  error: null,
};

function ratesReducer(state, action) {
  switch (action.type) {
    case "SET_RATES":
      return { ...state, rates: action.payload, isLoading: false };
    case "SET_BASE_CURRENCY":
      return { ...state, baseCurrency: action.payload };
    case "SET_SELECTED_CURRENCIES":
      return { ...state, selectedCurrencies: action.payload };
    case "SET_TIME_RANGE":
      return { ...state, timeRange: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export function ExchangeRatesProvider({ children }) {
  const [state, dispatch] = useReducer(ratesReducer, initialState);

  return (
    <ExchangeRatesContext.Provider value={{ state, dispatch }}>
      {children}
    </ExchangeRatesContext.Provider>
  );
}

export function useExchangeRates() {
  const context = useContext(ExchangeRatesContext);
  if (!context) {
    throw new Error(
      "useExchangeRates must be used within an ExchangeRatesProvider"
    );
  }
  return context;
}
