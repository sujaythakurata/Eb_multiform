import { FormikProps } from 'formik';
import { memo } from 'react';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import NextFormButton from '../fields/next_form_button';
import config from '../../config/config.json';
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
  useInitialData(formik, config.form.agreement.name);

  return (
    <div className={style.form__main__area}>
      <div className={style.form__title}>{config.form.agreement.title}</div>
      <div className={`${style.form__content__area}`}>
        <form
          className={`${style.form__area}`}
          action=""
          onSubmit={formik.handleSubmit}>
          <AgreementFields {...formik} />
          <div className={style.form__button__area}>
            <PreviousFormButton state={curForm} />
            <NextFormButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(Agreement);
