import initialState from '../functions/initialState';
import { setupStore } from './store';

describe('Redux Store', () => {
  it('Setup Store function return new Store', async () => {
    const store = setupStore();
    expect(store.getState().form).toMatchObject(initialState);
  });
});
