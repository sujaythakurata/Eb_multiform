import { FormikProps } from 'formik';
import { useEffect } from 'react';
import { getInitialData } from '../features/formslice';
import { useAppDispatch } from '../states/hook';

/*
 *set initial data on load
 *dispatch getinitaldata action
 */
export default function useInitialData(
  props: FormikProps<any>,
  key: string,
): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitialData());
    const curForm = Number(localStorage.getItem('curForm') ?? -1);
    const formData = JSON.parse(localStorage.getItem('formData') ?? '{}');
    if (curForm !== -1 && Object.keys(formData).length > 0) {
      if (key !== '') {
        props.setValues(formData[`${key}`]);
      } else {
        props.setValues({
          ...formData.ownerDetails,
          ...formData.renterDetails,
          ...formData.agreement,
          ...formData.mailingDetails,
          ...formData.deliveryDetails,
        });
      }
    }
  }, []);
}
