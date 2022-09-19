import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addRenterDetails, setNextForm } from '../features/formslice';

import validation from '../functions/renter_details.validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IRenterDetails } from '../types/form';

export default function useRenterDetails() {
  const formData = useAppSelector(state => state.form.formData.renterDetails);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const handelSubmit = (values: IRenterDetails) => {
    dispatch(addRenterDetails(values));
    dispatch(setNextForm(curForm + 1));
  };
  const formik: FormikProps<IRenterDetails> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: handelSubmit,
  });
  return formik;
}
