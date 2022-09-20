import { FormikProps } from 'formik';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IFormData } from '../../types/form';
import NextFormButton from '../fields/next_form_button';
import usePreview from '../../hooks/usePreview';
import PreviewDetails from './preview_details';
import PreviousFormButton from '../fields/previous_form_button';
import { useAppSelector } from '../../states/hook';

function Preview() {
  const formik: FormikProps<IFormData> = usePreview();
  const curForm = useAppSelector(state => state.form.curForm);
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik, '');

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <PreviewDetails {...formik} />
      <PreviousFormButton state={curForm} />
      <NextFormButton />
    </form>
  );
}

export default Preview;
