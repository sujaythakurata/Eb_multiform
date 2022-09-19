import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addOwnerDetails, setNextForm } from '../features/formslice';

import validation from '../functions/owner_details_validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IOwnerDetails } from '../types/form';

export default function useOwnerDetails() {
  const formData = useAppSelector(state => state.form.formData.ownerDetails);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const handelSubmit = (values: IOwnerDetails) => {
    dispatch(addOwnerDetails(values));
    dispatch(setNextForm(curForm + 1));
  };
  const formik: FormikProps<IOwnerDetails> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: handelSubmit,
  });
  return formik;
}
