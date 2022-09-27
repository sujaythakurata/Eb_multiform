import { screen, cleanup, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Form from '../form';
import { store } from '../../states/store';
import config from '../../config/config.json';
import MainArea from '../main_area';

afterEach(cleanup);
describe('Form component', () => {
  it('Form owner details form render without error', async () => {
    await act(async () => {
      await render(
        <Provider store={store}>
          <MainArea>
            <Form />
          </MainArea>
        </Provider>,
      );
    });
    const text = screen.getByTestId(
      config.form.ownerDetails.testId.title,
    ).textContent;
    expect(config.form.ownerDetails.title).toEqual(text);
  });
});
