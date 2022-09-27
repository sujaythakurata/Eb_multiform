// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Index from '.';
import { store } from '../states/store';

const renderComponent = async () => {
  await render(
    <Provider store={store}>
      <Index />
    </Provider>,
  );
};

beforeAll(async () => {
  await act(renderComponent);
});
describe('Index Page', () => {
  it('Index Page Render', async () => {});
});
