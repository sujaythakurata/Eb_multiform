/* eslint-disable prettier/prettier */
import config from '../config/config.json';
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
  case config.form.ownerDetails.state:
    return <OwnerDetails />;
  case config.form.renterDetails.state:
    return <RenterDetails />;
  case config.form.agreement.state:
    return <Agreement />;
  case config.form.mailingDetails.state:
    return <MailingDetails />;
  case config.form.deliveryDetails.state:
    return <DeliveryDetails />;
  default:
    return <Preview />;
  }
}
