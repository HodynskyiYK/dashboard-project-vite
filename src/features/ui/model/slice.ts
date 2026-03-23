import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  theme: 'light' | 'dark';
}

const initialState: UIState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === 'dark') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
    },
  },
});
