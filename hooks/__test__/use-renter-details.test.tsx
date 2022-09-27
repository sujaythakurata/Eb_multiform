import { renderHook } from '@testing-library/react';
import { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import fakeFormData from '../../data/test-data';
import initialState from '../../functions/initialState';
import { store } from '../../states/store';
import useRenterDetails from '../use_renter_details';

describe('Use owner Details hook', () => {
  it('should return formik', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const formik = renderHook(() => useRenterDetails(), { wrapper });
    expect(formik.result.current.values).toMatchObject(
      initialState.formData.renterDetails,
    );
    await act(async () => {
      formik.result.current.handleSubmit();
    });
    expect(formik.result.current.isValid).toBeFalsy();
    await act(async () => {
      formik.result.current.setValues(fakeFormData.formData.renterDetails);
    });
    await act(async () => {
      formik.result.current.handleSubmit();
    });
    expect(formik.result.current.values).toMatchObject(
      fakeFormData.formData.renterDetails,
    );
  });
});