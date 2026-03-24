import { baseApi } from '@/shared/api/baseApi';
import type { TUser } from '../model/types';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getUserById: builder.query<TUser, number>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
