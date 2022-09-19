import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addAgreement, setNextForm } from '../features/formslice';

import validation from '../functions/agreement_validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IAgreement } from '../types/form';

export default function useAgreement() {
  const formData = useAppSelector(state => state.form.formData.agreement);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const handelSubmit = (values: IAgreement) => {
    dispatch(addAgreement(values));
    dispatch(setNextForm(curForm + 1));
  };
  const formik: FormikProps<IAgreement> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: handelSubmit,
  });
  return formik;
}
