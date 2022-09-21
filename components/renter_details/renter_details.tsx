import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IRenterDetails } from '../../types/form';
import NextFormButton from '../fields/next_form_button';
import config from '../../config/config.json';
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
  useInitialData(formik, config.form.renterDetails.name);

  return (
    <div className={style.form__main__area}>
      <div className={style.form__title}>{config.form.renterDetails.title}</div>
      <div className={`${style.form__content__area}`}>
        <form
          className={`${style.form__area}`}
          action=""
          onSubmit={formik.handleSubmit}>
          <RenterDetailsFields {...formik} />
          <div className={style.form__button__area}>
            <PreviousFormButton state={curForm} />
            <NextFormButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(OwnerDetails);
