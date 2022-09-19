import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm1, setNextForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IForm1 } from '../types/form';

export default function useForm1() {
  const formData = useAppSelector(state => state.form.formData.form1);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IForm1> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm1(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
