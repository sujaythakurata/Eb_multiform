import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextFormButton from '../fields/next_form_button';
import env from '../../config/config.json';
import { IAgreement } from '../../types/form';
import useAgreement from '../../hooks/use_agreement';
import AgreementFields from './agreement_fields';
import { useAppSelector } from '../../states/hook';
import PreviousFormButton from '../fields/previous_form_button';

function Agreement() {
  const formik: FormikProps<IAgreement> = useAgreement();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, env.form.agreement.name);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <AgreementFields {...formik} />
      <PreviousFormButton state={curForm} />
      <NextFormButton />
    </form>
  );
}

export default memo(Agreement);
