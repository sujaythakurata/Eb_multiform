import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IFormData } from '../types/form';

export default function useForm2() {
  const formData = useAppSelector(state => state.form.formData);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IFormData> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm(values));
    },
  });
  return formik;
}
