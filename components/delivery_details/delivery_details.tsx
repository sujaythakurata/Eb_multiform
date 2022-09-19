import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextBtn from '../fields/nextbtn';
import env from '../../env/env.json';
import { IDeliveryDetails } from '../../types/form';
import useDeliveryDetails from '../../hooks/use_delivery_details';
import DeliveryDetailsFields from './delivery_details_fields';
import { useAppSelector } from '../../states/hook';
import PrevBtn from '../fields/prevbtn';

function DeliveryDetails() {
  const formik: FormikProps<IDeliveryDetails> = useDeliveryDetails();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, env.form.deliveryDetails.name);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <DeliveryDetailsFields {...formik} />
      <PrevBtn state={curForm} />
      <NextBtn />
    </form>
  );
}

export default memo(DeliveryDetails);
