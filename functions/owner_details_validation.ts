import * as Yup from 'yup';
import env from '../config/config.json';

/*
 *@return yup object validation schemea
 *owner details validation
 */

const { ownerKeys } = env.form.ownerDetails;
type ownerDetails = Yup.InferType<any>;
const validation: ownerDetails = {};
validation[ownerKeys[0]] = Yup.string().required('this field is required');
validation[ownerKeys[1]] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[ownerKeys[2]] = Yup.string().required('this field is required');
validation[ownerKeys[3]] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[ownerKeys[4]] = Yup.string()
  .matches(/[a-zA-z0-9]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
export default validation;
