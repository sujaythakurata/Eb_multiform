import { FormikProps } from 'formik';
import { memo } from 'react';
import useOwnerDetails from '../../hooks/use_owner_details';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IOwnerDetails } from '../../types/form';
import NextFormButton from '../fields/next_form_button';
import OwnerDetailsFields from './owner_details_fields';
import env from '../../config/config.json';

function OwnerDetails() {
  const formik: FormikProps<IOwnerDetails> = useOwnerDetails();
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, env.form.ownerDetails.name);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <OwnerDetailsFields {...formik} />
      <NextFormButton />
    </form>
  );
}

export default memo(OwnerDetails);
