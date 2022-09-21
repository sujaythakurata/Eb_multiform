import { FormikProps, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import * as Yup from 'yup';
import { setNextForm } from '../features/formslice';
import validation from '../functions/preview_validation';
import { useAppSelector } from '../states/hook';

export default function usePreview() {
  const formData = useAppSelector(state => state.form.formData);
  const dispatch = useDispatch();
  const handelSubmit = (values: typeof formik.initialValues) => {
    Swal.fire({
      title: 'Do you want to submit the form?',
      showDenyButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: 'Cancel',
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Form Submit', '', 'success');
        dispatch(setNextForm(6));
        console.log(values);
      } else if (result.isDenied) {
        Swal.fire('Form not submit', '', 'info');
      }
    });
  };
  const formik: FormikProps<any> = useFormik({
    initialValues: {
      ...formData.ownerDetails,
      ...formData.renterDetails,
      ...formData.agreement,
      ...formData.mailingDetails,
      ...formData.deliveryDetails,
    },
    validationSchema: Yup.object({ ...validation }),
    onSubmit: handelSubmit,
  });
  return formik;
}
