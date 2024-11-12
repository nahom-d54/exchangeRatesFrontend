import { api } from "../api";

const subscriptionTypesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptionTypes: builder.query({
      query: () => "subscription-types/types",
      providesTags: ["SubscriptionType"],
    }),
    getSubscriptionTypeById: builder.query({
      query: (id) => `subscription-types/${id}`,
      providesTags: (result, error, id) => [{ type: "SubscriptionType", id }],
    }),
    createSubscriptionType: builder.mutation({
      query: (payload) => ({
        url: "subscription-types",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["SubscriptionType"],
    }),
    updateSubscriptionType: builder.mutation({
      query: (payload) => {
        const { _id, ...data } = payload;
        return {
          url: `subscription-types/${_id}`,
          method: "patch",
          body: data,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "SubscriptionType", id: arg._id },
      ],
    }),
    deleteSubscriptionType: builder.mutation({
      query: (id) => ({
        url: `subscription-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "SubscriptionType", id },
      ],
    }),
  }),
});

export const {
  useGetSubscriptionTypesQuery,
  useGetSubscriptionTypeByIdQuery,
  useCreateSubscriptionTypeMutation,
  useUpdateSubscriptionTypeMutation,
  useDeleteSubscriptionTypeMutation,
} = subscriptionTypesApiSlice;
