import { baseApi } from '@/shared/api/baseApi';
import type { TUser } from '../model/types';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], string>({
      query: (search) => ({
        url: '/users',
        params: search ? { name_like: search } : {},
      }),
      providesTags: ['User'],
    }),
    getUserById: builder.query<TUser, number>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
