import { api } from "../api";

const subscriptionApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => "subscription",
      providesTags: ["Subscription"],
    }),
    // getSubscriptionById: builder.query({
    // query: (id) => `subscriptions/${id}`,
    // }),
    createSubscription: builder.mutation({
      query: (payload) => ({
        url: "subscription",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Subscription"],
    }),
    // updateSubscription: builder.mutation({
    // query: (payload) => {
    //     const { id, ...data } = payload;
    //     return {
    //     url: `subscriptions/${id}`,
    //     method: "PUT",
    //     body: data,
    //     };
    // },
    // }),
    // deleteSubscription: builder.mutation({
    // query: (id) => ({
    //     url: `subscriptions/${id}`,
    //     method: "DELETE",
    // }),
    // }),
    verifySubscription: builder.query({
      query: () => ({
        url: "subscription/verify",
        method: "POST",
      }),
      providesTags: ["Subscription"],
    }),
    getSubscriptionPlans: builder.query({
      query: () => "subscription/types",
      providesTags: ["Subscription"],
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useVerifySubscriptionQuery,
  useGetSubscriptionPlansQuery,
} = subscriptionApiSlice;
