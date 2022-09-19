import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { demo: string } = {
  demo: 'demo',
};

export const userSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    demoAction: (state, action: PayloadAction<string>) => {
      state.demo = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { demoAction } = userSlice.actions;
