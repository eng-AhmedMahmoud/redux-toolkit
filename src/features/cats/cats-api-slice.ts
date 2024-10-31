import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CATS_API_KEY = 'live_l7HQaeWKKHaX5ptnRxf5j87TE6KpfOrWCHIUAWcVBCZOPhuZYp10ayzdycrhPlii';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const catApiSlice = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', CATS_API_KEY);
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchCatBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        }
      })
    }
  }
});

export const { useFetchCatBreedsQuery } = catApiSlice;