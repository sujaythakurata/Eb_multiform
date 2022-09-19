import { FormikProps } from 'formik';
import AgreementFields from '../agreement/agreement_fields';
import DeliveryDetailsFields from '../delivery_details/delivery_details_fields';
import MailingDetailsField from '../mailing_details/mailing_details_fields';
import OwnerDetailsFields from '../owner_details/owner_details_fields';
import RenterDetailsFields from '../renter_details/renter_details_fields';

function PreviewDetails(props: FormikProps<any>) {
  return (
    <div className="previw__container">
      <OwnerDetailsFields {...props} />
      <RenterDetailsFields {...props} />
      <AgreementFields {...props} />
      <MailingDetailsField {...props} />
      <DeliveryDetailsFields {...props} />
    </div>
  );
}
export default PreviewDetails;
