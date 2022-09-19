import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm4, setNextForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IForm4 } from '../types/form';

export default function useForm4() {
  const formData = useAppSelector(state => state.form.formData.form4);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IForm4> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm4(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
