import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextFormButton from '../fields/next_form_button';
import config from '../../config/config.json';
import { IDeliveryDetails } from '../../types/form';
import useDeliveryDetails from '../../hooks/use_delivery_details';
import DeliveryDetailsFields from './delivery_details_fields';
import { useAppSelector } from '../../states/hook';
import PreviousFormButton from '../fields/previous_form_button';

function DeliveryDetails() {
  const formik: FormikProps<IDeliveryDetails> = useDeliveryDetails();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, config.form.deliveryDetails.name);

  return (
    <div className={style.form__main__area}>
      <div className={style.form__title}>
        {config.form.deliveryDetails.title}
      </div>
      <div className={`${style.form__content__area}`}>
        <form
          className={`${style.form__area}`}
          action=""
          onSubmit={formik.handleSubmit}>
          <DeliveryDetailsFields {...formik} />
          <div className={style.form__button__area}>
            <PreviousFormButton state={curForm} />
            <NextFormButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(DeliveryDetails);
