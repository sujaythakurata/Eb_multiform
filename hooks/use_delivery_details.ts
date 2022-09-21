import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import { addDeliveryDetails, setNextForm } from '../features/formslice';

import validation from '../functions/delivery_details_validation';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { IDeliveryDetails } from '../types/form';

export default function useDeliveryDetails() {
  const formData = useAppSelector(state => state.form.formData.deliveryDetails);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const formik: FormikProps<IDeliveryDetails> = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      dispatch(addDeliveryDetails(values));
      dispatch(setNextForm(curForm + 1));
    },
  });
  return formik;
}
