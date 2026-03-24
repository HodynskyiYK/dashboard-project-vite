import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from '@/features';
import { baseApi } from '@/shared/api/baseApi';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
