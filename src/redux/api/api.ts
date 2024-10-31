import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "bassApi",
    baseQuery: fetchBaseQuery({ baseUrl:'htps://localhost:5000'}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url:'/todos',
                method:'GET',
            })
        })
    }),
});

export const { useGetTodosQuery } = baseApi