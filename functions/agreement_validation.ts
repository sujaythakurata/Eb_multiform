import * as Yup from 'yup';
import env from '../config/config.json';

/*
 *@return yup object validation schemea
 *agreement validation
 */

const { agreementKeys } = env.form.agreement;
type agreement = Yup.InferType<any>;
const validation: agreement = {};
validation[agreementKeys[0]] = Yup.date()
  .min(new Date('2010-01-01'), 'Before 2010 not allowed')
  .max(new Date('2022-12-31'), 'after 2022 not allowed')
  .required('this field is required');
validation[agreementKeys[1]] = Yup.number()
  .min(500, 'not less than 500 INR')
  .max(2000000, 'not greater than 2000000')
  .required('this field is required');
validation[agreementKeys[2]] = Yup.number()
  .min(500, 'not less than 500 INR')
  .max(2000000, 'not greater than 2000000')
  .required('this field is required');
validation[agreementKeys[3]] = Yup.string().required('this field is required');
validation[agreementKeys[4]] = Yup.string()
  .matches(/[a-zA-Z0-9 ]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
validation[agreementKeys[5]] = Yup.string()
  .matches(/[a-zA-Z0-9 ]{1,}$/, 'no special character allowed')
  .min(10, 'minium 10 character')
  .max(100, 'maximum 100 character allowed')
  .required('this field is required');
validation[agreementKeys[6]] = Yup.string().nullable();
export default validation;
