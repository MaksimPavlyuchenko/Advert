import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '841243666631119';

const searchParams = new URLSearchParams({
  key: API_KEY,
});

export const carsApi = createApi({
  reducerPath: 'carsApi',
  tagTypes: ['Cars'],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://652fcfb66c756603295db520.mockapi.io`,
  }),
  endpoints: build => ({
    getCars: build.query({
      query: (page = '') =>
        `/adverts?${page && `page=${page}`}&limit=8&${searchParams}`,
      providesTags: ['Cars'],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
