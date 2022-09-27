// eslint-disable-next-line object-curly-newline
import { screen, cleanup, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../states/store';
import Header from '../header';

afterEach(cleanup);
describe('Header Component', () => {
  it('Header background image alt text', async () => {
    await act(async () => {
      await render(
        <Provider store={store}>
          <Header />
        </Provider>,
      );
    });
    const element = await screen.getByAltText('background image of a house');
    expect(element).toBeInTheDocument();
  });
});
