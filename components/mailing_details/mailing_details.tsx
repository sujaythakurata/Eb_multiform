import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextFormButton from '../fields/next_form_button';
import env from '../../config/config.json';
import { IMailingDetails } from '../../types/form';
import useMailingDetails from '../../hooks/use_mailing_details';
import MailingDetailsField from './mailing_details_fields';
import PreviousFormButton from '../fields/previous_form_button';
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
      <PreviousFormButton state={curForm} />
      <NextFormButton />
    </form>
  );
}

export default memo(Agreement);
