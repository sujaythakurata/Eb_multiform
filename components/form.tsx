/* eslint-disable prettier/prettier */
import env from '../config/config.json';
import { useAppSelector } from '../states/hook';
import OwnerDetails from './owner_details/owner_details';
import RenterDetails from './renter_details/renter_details';
import Agreement from './agreement/agreement';
import MailingDetails from './mailing_details/mailing_details';
import DeliveryDetails from './delivery_details/delivery_details';
import Preview from './preview/preview';

export default function Form() {
  /*
    @cursate current form state
  */
  const curState = useAppSelector(state => state.form.curForm);
  switch (curState) {
  case env.form.ownerDetails.state:
    return <OwnerDetails />;
  case env.form.renterDetails.state:
    return <RenterDetails />;
  case env.form.agreement.state:
    return <Agreement />;
  case env.form.mailingDetails.state:
    return <MailingDetails />;
  case env.form.deliveryDetails.state:
    return <DeliveryDetails />;
  default:
    return <Preview />;
  }
}
