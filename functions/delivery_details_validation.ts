import * as Yup from 'yup';
import env from '../env/env.json';

/*
 *@return yup object validation schemea
 *deliveryDetails validation
 */

const { deliveryKeys } = env.form.deliveryDetails;
type deliveryDetails = Yup.InferType<any>;
const validation: deliveryDetails = {};
validation[deliveryKeys[1]] = Yup.string()
  .matches(/[a-zA-z ]{1,}$/, 'valid name only letters allowed')
  .min(5, 'minium 5 character')
  .max(30, 'maximum 30 character allowed')
  .required('this field is required');
validation[deliveryKeys[0]] = Yup.string().required('this field is required');
validation[deliveryKeys[2]] = Yup.string().required('this field is required');
validation[deliveryKeys[3]] = Yup.string()
  .email('invalid email')
  .required('this field is required');
validation[deliveryKeys[4]] = Yup.string()
  .matches(/[a-zA-z0-9]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
validation[deliveryKeys[5]] = Yup.string()
  .matches(/^[1-9][0-9]{6,}/, 'enter a valid postalcode')
  .required('this field is required');
export default validation;