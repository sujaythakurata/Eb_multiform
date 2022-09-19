import { FormikProps } from 'formik';
import { useEffect } from 'react';
import { getInitialData } from '../features/formslice';
import { useAppDispatch } from '../states/hook';
import { IFormData } from '../types/form';

/*
 *set initial data on load
 *dispatch getinitaldata action
 */
export default function useInitialData(props: FormikProps<any>): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitialData());
    const curForm = Number(localStorage.getItem('curForm') ?? -1);
    const formData: IFormData = JSON.parse(
      localStorage.getItem('formData') ?? '{}',
    );
    if (curForm !== -1 && Object.keys(formData).length > 0) {
      props.setValues(formData.form1);
    }
  }, []);
}
