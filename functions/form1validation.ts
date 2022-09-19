import * as Yup from 'yup';
import env from '../env/env.json';

/*
 *@return yup object validation schemea
 *form 1 validation
 */

const [key1, key2, key3, key4, key5] = env.form.form1.keys;
type form1 = Yup.InferType<any>;
const validation: form1 = {};
validation[key1] = Yup.string().required('this field is required');
validation[key2] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[key3] = Yup.string().required('this field is required');
validation[key4] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[key5] = Yup.string()
  .matches(/[a-zA-z0-9]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
export default validation;
