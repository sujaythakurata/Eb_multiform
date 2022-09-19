import * as Yup from 'yup';
import ownerValidation from './owner_details_validation';
import renterValidation from './renter_details.validation';
import agreementValidation from './agreement_validation';
import mailingValidation from './mailing_details_validation';
import deliveryValidation from './delivery_details_validation';

type preview = Yup.InferType<any>;
const validation: preview = {
  ...ownerValidation,
  ...renterValidation,
  ...agreementValidation,
  ...mailingValidation,
  ...deliveryValidation,
};

export default validation;
