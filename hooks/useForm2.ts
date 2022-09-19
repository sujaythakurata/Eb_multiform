import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm2, setNextForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IForm2 } from '../types/form';

export default function useForm2() {
  const formData = useAppSelector(state => state.form.formData.form2);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IForm2> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm2(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
