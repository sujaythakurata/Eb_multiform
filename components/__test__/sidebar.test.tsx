// eslint-disable-next-line object-curly-newline
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../states/store';
import config from '../../config/config.json';
import SideBar from '../sidebar';

afterEach(cleanup);
describe('sidebar', () => {
  it('Sidebar on mouseenter show tooltip ownerdetails title', async () => {
    await act(async () => {
      await render(
        <Provider store={store}>
          <SideBar />
        </Provider>,
      );
    });
    fireEvent.mouseEnter(screen.getByTestId('tooltip-test-0'));
    const element = await screen.getByText(config.form.ownerDetails.title);
    expect(element).toBeInTheDocument();
  });
  it('Sidebar on mouseleave hide tooltip ownerdetails title', async () => {
    await act(async () => {
      await render(
        <Provider store={store}>
          <SideBar />
        </Provider>,
      );
    });
    fireEvent.mouseLeave(screen.getByTestId('tooltip-test-0'));
    const element = await screen.queryByText(config.form.ownerDetails.title);
    expect(element).toBeNull();
  });
  it('Sidebar on click next page', async () => {
    await act(async () => {
      await render(
        <Provider store={store}>
          <SideBar />
        </Provider>,
      );
    });
    fireEvent.click(screen.getByTestId('tooltip-test-0'));
    expect(store.getState().form.curForm).toEqual(0);
    fireEvent.click(screen.getByTestId('tooltip-test-1'));
    expect(store.getState().form.curForm).toEqual(1);
  });
});
