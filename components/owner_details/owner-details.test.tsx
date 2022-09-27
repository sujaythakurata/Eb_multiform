import { screen, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import OwnerDetails from './owner_details';
import config from '../../config/config.json';
import renderWithProviders from '../__test__/redux-test-util';

afterEach(cleanup);
const renderPage = async () => {
  await act(async () => {
    await renderWithProviders(<OwnerDetails />);
  });
};
describe('Name field', () => {
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

describe('Relation Name field', () => {
  it('Fill relation name field with invalid data', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationNameLabel}`,
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
  it('Fill relation name field with less than 5 letters', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationNameLabel}`,
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

  it('Fill relation name field with more than 30 letter', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationNameLabel}`,
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

  it('Fill relation name field valid', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationNameLabel}`,
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
});

describe('Owner Address Field', () => {
  it('Fill valid address', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.addressLabel}`,
    );
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'Nona chandanpukur barrackpore kolkata - 700122' },
      });
    });
    expect(
      await screen.getByDisplayValue(
        'Nona chandanpukur barrackpore kolkata - 700122',
      ),
    ).toBeInTheDocument();
  });

  it('Fill invalid address', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.addressLabel}`,
    );
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'Nona chandanpukur barrackpore kolkata - 700122 !#' },
      });
      await fireEvent.click(nextButton);
    });
    expect(
      await screen.getByText(/No Special Character Allowed/i),
    ).toBeInTheDocument();
  });

  it('Fill address less than 10 character', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.addressLabel}`,
    );
    const nextButton = await screen.getByTestId('next-button');
    await act(async () => {
      await fireEvent.change(titleInput, {
        target: { value: 'suj' },
      });
      await fireEvent.click(nextButton);
    });
    expect(await screen.getByText(/Minium 10 Character/i)).toBeInTheDocument();
  });
});

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

  it('Fill relation designation field', async () => {
    await renderPage();
    const titleInput = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationLabel}-1`,
    );
    await act(async () => {
      await fireEvent.click(titleInput);
    });
    expect(titleInput).toBeChecked();
  });

  it('Form submit without error', async () => {
    await renderPage();
    const nextButton = await screen.getByTestId('next-button');
    const ownerTitle = await screen.getByTestId(
      `${config.form.ownerDetails.testId.titleLabel}-1`,
    );
    const ownerName = await screen.getByTestId(
      `${config.form.ownerDetails.testId.nameLabel}`,
    );
    const relationTitle = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationLabel}-1`,
    );
    const relationName = await screen.getByTestId(
      `${config.form.ownerDetails.testId.relationNameLabel}`,
    );
    const address = await screen.getByTestId(
      `${config.form.ownerDetails.testId.addressLabel}`,
    );

    await act(async () => {
      await fireEvent.click(ownerTitle);
      await fireEvent.change(ownerName, {
        target: { value: 'sujay thakurata' },
      });
      await fireEvent.click(relationTitle);
      await fireEvent.change(relationName, {
        target: { value: 'sujay thakurata' },
      });
      await fireEvent.change(address, {
        target: { value: 'Nona chandanpukur barrackpore kolkata - 700122 ' },
      });
      await fireEvent.click(nextButton);
    });
    const text = await screen.queryAllByText(/This Field Is Required/i);
    expect(text.length).toEqual(0);
  });
});
