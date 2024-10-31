import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = 'live_6fl5aK7SqmKQRz8QbqzBed8gspy0vqnVmkZ24LhPll4KswuECjCgvT902XHNsmkX';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const dogApiSlice = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers
    }
  }),
  endpoints(builder){
    return {
      fetchDogBreeds: builder.query<Breed[], number | void>({ 
        query(limit = 10){
          return `/breeds?limit=${limit}`;
        }
      })
    }
  }
});

export const { useFetchDogBreedsQuery } = dogApiSlice;