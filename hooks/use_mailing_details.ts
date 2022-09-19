import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addMailingDetails, setNextForm } from '../features/formslice';

import validation from '../functions/mailing_details_validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IMailingDetails } from '../types/form';

export default function useMailingDetails() {
  const formData = useAppSelector(state => state.form.formData.mailingDetails);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IMailingDetails> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addMailingDetails(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
