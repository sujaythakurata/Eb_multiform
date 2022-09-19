import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm3, setNextForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IForm3 } from '../types/form';

export default function useForm3() {
  const formData = useAppSelector(state => state.form.formData.form3);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IForm3> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm3(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
