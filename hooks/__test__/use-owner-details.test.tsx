import { renderHook } from '@testing-library/react';
import { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import initialState from '../../functions/initialState';
import { store } from '../../states/store';
import useOwnerDetails from '../use_owner_details';

describe('Use owner Details hook', () => {
  it('should return formik', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const formik = renderHook(() => useOwnerDetails(), { wrapper });
    expect(formik.result.current.values).toMatchObject(
      initialState.formData.ownerDetails,
    );
    await act(async () => {
      await formik.result.current.handleSubmit();
    });
    expect(formik.result.current.isValid).toBeFalsy();
  });
});
