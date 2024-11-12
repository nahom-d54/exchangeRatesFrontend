import { api } from "../api";

const exchangeRateApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getExchangeRates: builder.query({
      query: (payload) => {
        const { page, limit } = payload;
        return {
          url: "rates",
          method: "GET",
          params: {
            page,
            limit,
          },
        };
      }, // gets all exchange rates paginated
      invalidatesTags: ["ExchangeRate"],
    }),
    getBankNames: builder.query({
      query: () => `rates/bank-names`,
    }),
    getBestBuyRates: builder.query({
      query: () => `rates/best-buy-rate`,
    }),
    getCurrencyCodes: builder.query({
      query: () => `rates/currency-codes`,
    }),
    getRateByBankNCurrency: builder.query({
      query: (payload) => {
        const { bankName, currencyCode } = payload;
        return {
          url: `rates/bnc/${bankName}/${currencyCode}`,
          method: "GET",
        };
      },
    }),
    getRateByCurrency: builder.query({
      query: (currencyCode) => `rates/c/${currencyCode}`,
    }),
    getRateByDate: builder.query({
      query: (date) => `rates/exchange-rate/${date}`,
    }),
    getRateByBankNDate: builder.query({
      query: (payload) => {
        const { bankName, date } = payload;
        return {
          url: `rates/bnd/${bankName}/${date}`,
          method: "GET",
        };
      },
    }),
    getRateByCurrencyNDate: builder.query({
      query: (payload) => {
        const { currencyCode, date } = payload;
        return {
          url: `rates/cnd/${currencyCode}/${date}`,
          method: "GET",
        };
      },
    }),
    getRateByBank: builder.query({
      query: (bankName) => `rates/b/${bankName}`,
    }),
  }),
});

export const {
  useGetExchangeRatesQuery,
  useGetBankNamesQuery,
  useGetBestBuyRatesQuery,
  useGetCurrencyCodesQuery,
  useGetRateByBankNCurrencyQuery,
  useGetRateByCurrencyQuery,
  useGetRateByDateQuery,
  useGetRateByBankNDateQuery,
  useGetRateByCurrencyNDateQuery,
  useGetRateByBankQuery,
} = exchangeRateApiSlice;
