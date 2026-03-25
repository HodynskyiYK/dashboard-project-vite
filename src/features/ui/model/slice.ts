import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  search: string;
}

const initialState: UIState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
