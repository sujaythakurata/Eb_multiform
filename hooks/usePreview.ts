import { FormikProps, useFormik } from 'formik';

import * as Yup from 'yup';
import validation from '../functions/preview_validation';
import { useAppSelector } from '../states/hook';

export default function usePreview() {
  const formData = useAppSelector(state => state.form.formData);
  const formik: FormikProps<any> = useFormik({
    initialValues: {
      ...formData.ownerDetails,
      ...formData.renterDetails,
      ...formData.agreement,
      ...formData.mailingDetails,
      ...formData.deliveryDetails,
    },
    validationSchema: Yup.object({ ...validation }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return formik;
}
