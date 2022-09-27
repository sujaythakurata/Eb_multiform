import { screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from '../form';
import { store } from '../../states/store';
import config from '../../config/config.json';
import renderWithProviders from './redux-test-util';
import { setNextForm } from '../../features/formslice';

afterEach(cleanup);
describe('Form component', () => {
  it('Form owner details form render without error', async () => {
    await renderPage(0);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.ownerDetails.title).toEqual(text);
  });
  it('Form renter details form render without error', async () => {
    await renderPage(1);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.renterDetails.title).toEqual(text);
  });
  it('Form agreement form render without error', async () => {
    await renderPage(2);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.agreement.title).toEqual(text);
  });
  it('Form mailing details form render without error', async () => {
    await renderPage(3);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.mailingDetails.title).toEqual(text);
  });
  it('Form delivery details form render without error', async () => {
    await renderPage(4);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.deliveryDetails.title).toEqual(text);
  });
  it('Form preview form render without error', async () => {
    await renderPage(5);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.preview.title).toEqual(text);
  });
  it('Form default page render without any error', async () => {
    await renderPage(8);
    const text = screen.getAllByText(/[a-zA-z/]{3,}/)[0].textContent;
    expect(config.form.preview.title).toEqual(text);
  });
});

const renderPage = async (state: number) => {
  await act(async () => {
    store.dispatch(setNextForm(state));
    await renderWithProviders(<Form />, { store });
  });
};
