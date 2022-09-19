import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/formslice';

const reducers = {
  reducer: {
    form: formSlice,
  },
};

export const store = configureStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
