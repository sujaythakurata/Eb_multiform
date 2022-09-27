import { screen, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import OwnerDetails from './owner_details';
import { store } from '../../states/store';
import config from '../../config/config.json';
import renderWithProviders from '../__test__/redux-test-util';

afterEach(cleanup);
const renderPage = async () => {
  await act(async () => {
    await renderWithProviders(<OwnerDetails />, { store });
  });
};
describe('Owner Details Form', () => {
  it('Render without error', async () => {
    await renderPage();
    expect(
      await screen.getByTestId(config.form.ownerDetails.testId.title),
    ).toBeInTheDocument();
  });

  it('Submit without give input in any field', async () => {
    await renderPage();
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.click(nextButton);
    });
    const text = await screen.getAllByText(/This Field Is Required/i);
    expect(text.length).toEqual(5);
  });

  it('Fill title field', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.titleLabel}-1`,
    );
    await act(async () => {
      await fireEvent.click(titleInput);
    });
    expect(titleInput).toBeChecked();
  });

  it('Fill name field valid', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.nameLabel}`,
    );
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'sujay thakurata' },
      });
    });
    expect(
      await screen.getByDisplayValue('sujay thakurata'),
    ).toBeInTheDocument();
  });

  it('Fill name field with invalid data', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.nameLabel}`,
    );
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'sujay thakurata1' },
      });
      await fireEvent.click(nextButton);
    });
    expect(
      await screen.getByText(/Invalid Name Only Letters Allowed/i),
    ).toBeInTheDocument();
  });

  it('Fill name field with less than 5 letters', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.nameLabel}`,
    );
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'suj' },
      });
      await fireEvent.click(nextButton);
    });
    expect(await screen.getByText(/Minium 5 Character/i)).toBeInTheDocument();
  });

  it('Fill name field with more than 30 letter', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.nameLabel}`,
    );
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'aakhkhlhlhlkhkhklhlkhlkhhlhlkkhlkh' },
      });
      await fireEvent.click(nextButton);
    });
    expect(
      await screen.getByText(/Maximum 30 Character Allowed/i),
    ).toBeInTheDocument();
  });
});
