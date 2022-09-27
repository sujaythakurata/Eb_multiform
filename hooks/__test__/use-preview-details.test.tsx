import { fireEvent, renderHook, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import fakeFormData from '../../data/test-data';
import initialState from '../../functions/initialState';
import { store } from '../../states/store';
import usePreview from '../usePreview';

window.scrollTo = jest.fn();
afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});
describe('Use owner Details hook', () => {
  it('should return formik', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const formik = renderHook(() => usePreview(), { wrapper });
    expect(formik.result.current.values).toMatchObject({
      ...initialState.formData.ownerDetails,
      ...initialState.formData.renterDetails,
      ...initialState.formData.agreement,
      ...initialState.formData.mailingDetails,
      ...initialState.formData.deliveryDetails,
    });
    await act(async () => {
      await formik.result.current.handleSubmit();
    });
    expect(formik.result.current.isValid).toBeFalsy();
    await act(async () => {
      await formik.result.current.setValues({
        ...fakeFormData.formData.ownerDetails,
        ...fakeFormData.formData.renterDetails,
        ...fakeFormData.formData.agreement,
        ...fakeFormData.formData.mailingDetails,
        ...fakeFormData.formData.deliveryDetails,
      });
    });
    await act(async () => {
      await formik.result.current.handleSubmit(formik.result.current.values);
    });
    await act(async () => {
      await fireEvent.click(await screen.getByText('Submit'));
    });
    await act(async () => {
      await fireEvent.click(await screen.getByText('OK'));
    });
    expect(formik.result.current.isValid).toBeTruthy();
    await act(async () => {
      await formik.result.current.handleSubmit(formik.result.current.values);
    });
    const cancelButton = await screen.getAllByText('Cancel');
    await act(async () => {
      await fireEvent.click(cancelButton[0]);
    });
    await act(async () => {
      await fireEvent.click(await screen.getByText('OK'));
    });
    expect(formik.result.current.isSubmitting).toBeTruthy();
  });
});
