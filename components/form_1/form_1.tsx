import { FormikProps } from 'formik';
import { memo } from 'react';
import useForm1 from '../../hooks/useForm1';
import useInitialData from '../../hooks/useInitialdata';
import style from '../../styles/home.module.scss';
import { IForm1 } from '../../types/form';
import NextBtn from '../fields/nextbtn';
import Form1Fields from './form_1_fields';

function Form1() {
  const formik: FormikProps<IForm1> = useForm1();
  /*
   *set form initial data if there is any
   *@return void
   */
  useInitialData(formik);

  return (
    <form
      className={`${style.form__area}`}
      action=""
      onSubmit={formik.handleSubmit}>
      <Form1Fields {...formik} />
      <NextBtn />
    </form>
  );
}

export default memo(Form1);
