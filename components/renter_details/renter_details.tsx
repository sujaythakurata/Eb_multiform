import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IRenterDetails } from '../../types/form';
import NextBtn from '../fields/nextbtn';
import env from '../../env/env.json';
import useRenterDetails from '../../hooks/use_renter_details';
import RenterDetailsFields from './renter_details_fields';
import { useAppSelector } from '../../states/hook';
import PrevBtn from '../fields/prevbtn';

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
      <PrevBtn state={curForm} />
      <NextBtn />
    </form>
  );
}

export default memo(OwnerDetails);
