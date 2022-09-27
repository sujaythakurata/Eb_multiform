import { FormikProps } from 'formik';
import { memo } from 'react';
import useOwnerDetails from '../../hooks/use_owner_details';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IOwnerDetails } from '../../types/form';
import NextFormButton from '../fields/next_form_button';
import OwnerDetailsFields from './owner_details_fields';
import config from '../../config/config.json';

function OwnerDetails() {
  const formik: FormikProps<IOwnerDetails> = useOwnerDetails();
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, config.form.ownerDetails.name);

  return (
    <div className={style.form__main__area}>
      <div
        className={style.form__title}
        data-testid={config.form.ownerDetails.testId.title}>
        {config.form.ownerDetails.title}
      </div>
      <div className={`${style.form__content__area}`}>
        <form action="" onSubmit={formik.handleSubmit}>
          <OwnerDetailsFields {...formik} />
          <div className={style.form__button__area}>
            <NextFormButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(OwnerDetails);
