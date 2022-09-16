// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
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
  test('Index page get Form tag', async () => {
    await act(renderComponent);
    expect('Form').toEqual(screen.getByTestId('form').textContent);
  });
  test('Index page get sidebar', async () => {
    await act(renderComponent);
    expect('sidebar').toEqual(screen.getByTestId('sidebar').textContent);
  });
});
