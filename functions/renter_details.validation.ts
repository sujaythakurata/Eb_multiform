import * as Yup from 'yup';
import env from '../config/config.json';

/*
 *@return yup object validation schemea
 *renter details validation
 */

const { renterKeys } = env.form.renterDetails;
type renterDetails = Yup.InferType<any>;
const validation: renterDetails = {};
validation[renterKeys[0]] = Yup.string().required('this field is required');
validation[renterKeys[1]] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[renterKeys[2]] = Yup.string().required('this field is required');
validation[renterKeys[3]] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[renterKeys[4]] = Yup.string()
  .matches(/[a-zA-z0-9 ]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
export default validation;
