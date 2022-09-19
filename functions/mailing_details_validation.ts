import * as Yup from 'yup';
import env from '../env/env.json';

/*
 *@return yup object validation schemea
 *mailingDetails validation
 */

const { mailingKeys } = env.form.mailingDetails;
type mailingDetails = Yup.InferType<any>;
const validation: mailingDetails = {};
validation[mailingKeys[0]] = Yup.number()
  .min(1, 'select a stamp duty')
  .required('this field is required');
validation[mailingKeys[1]] = Yup.string().required('this field is required');
validation[mailingKeys[2]] = Yup.string().nullable();
validation[mailingKeys[3]] = Yup.string().required('this field is required');
validation[mailingKeys[4]] = Yup.string().required('this field is required');
export default validation;
