import { FormikProps } from 'formik';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IFormData } from '../../types/form';
import usePreview from '../../hooks/usePreview';
import PreviewDetails from './preview_details';
import PreviousFormButton from '../fields/previous_form_button';
import { useAppSelector } from '../../states/hook';
import config from '../../config/config.json';

function Preview() {
  const formik: FormikProps<IFormData> = usePreview();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, '');

  return (
    <div className={style.form__main__area}>
      <div className={style.form__title}>{config.form.preview.title}</div>
      <div className={`${style.form__content__area}`}>
        <form
          className={`${style.form__area}`}
          action=""
          onSubmit={formik.handleSubmit}>
          <PreviewDetails {...formik} />
          <div className={style.form__button__area}>
            <PreviousFormButton state={curForm} />
            <button
              className={`btn btn-lg btn-light ${style.next__btn}`}
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Preview;
