import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextBtn from '../fields/nextbtn';
import env from '../../env/env.json';
import { IMailingDetails } from '../../types/form';
import useMailingDetails from '../../hooks/use_mailing_details';
import MailingDetailsField from './mailing_details_fields';
import PrevBtn from '../fields/prevbtn';
import { useAppSelector } from '../../states/hook';

function Agreement() {
  const formik: FormikProps<IMailingDetails> = useMailingDetails();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, env.form.mailingDetails.name);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <MailingDetailsField {...formik} />
      <PrevBtn state={curForm} />
      <NextBtn />
    </form>
  );
}

export default memo(Agreement);
