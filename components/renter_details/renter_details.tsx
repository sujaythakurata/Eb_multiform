import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IRenterDetails } from '../../types/form';
import NextFormButton from '../fields/next_form_button';
import env from '../../config/config.json';
import useRenterDetails from '../../hooks/use_renter_details';
import RenterDetailsFields from './renter_details_fields';
import { useAppSelector } from '../../states/hook';
import PreviousFormButton from '../fields/previous_form_button';

function OwnerDetails() {
  const formik: FormikProps<IRenterDetails> = useRenterDetails();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, env.form.renterDetails.name);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <RenterDetailsFields {...formik} />
      <PreviousFormButton state={curForm} />
      <NextFormButton />
    </form>
  );
}

export default memo(OwnerDetails);
