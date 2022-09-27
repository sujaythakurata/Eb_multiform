import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import formSlice from '../features/formslice';

const reducers = {
  reducer: {
    form: formSlice,
  },
};

export const store = configureStore(reducers);
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({ reducer: { form: formSlice }, preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
