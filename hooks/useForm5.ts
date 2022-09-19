import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addForm5, setNextForm } from '../features/formslice';

import validation from '../functions/form1validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IForm5 } from '../types/form';

export default function useForm5() {
  const formData = useAppSelector(state => state.form.formData.form5);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IForm5> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addForm5(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
