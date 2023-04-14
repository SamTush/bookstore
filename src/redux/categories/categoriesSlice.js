import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkState: () => {
      'Under construction';
    },
  },
});

export const { checkState } = categoriesSlice.actions;
export default categoriesSlice.reducer;
