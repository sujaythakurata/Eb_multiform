// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Index from '../pages';
import { store } from '../states/store';

const renderComponent = async () => {
  await render(
    <Provider store={store}>
      <Index />
    </Provider>,
  );
};

describe('Index Page', () => {
  test('Index Page Render', async () => {
    await act(renderComponent);
  });
});
