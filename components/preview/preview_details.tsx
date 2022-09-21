import { FormikProps } from 'formik';
import config from '../../config/config.json';
import AgreementFields from '../agreement/agreement_fields';
import DeliveryDetailsFields from '../delivery_details/delivery_details_fields';
import MailingDetailsField from '../mailing_details/mailing_details_fields';
import OwnerDetailsFields from '../owner_details/owner_details_fields';
import RenterDetailsFields from '../renter_details/renter_details_fields';
import style from '../../styles/home.module.scss';

function PreviewDetails(props: FormikProps<any>) {
  return (
    <div className="previw__container">
      <div className="accordion" id="preview__accrodion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="owner__details">
            <button
              className={`accordion-button ${style.preview__accordion__header}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#owner__details__collapse"
              aria-expanded="true"
              aria-controls="owner__details__collapse">
              {config.form.ownerDetails.title}
            </button>
          </h2>
          <div
            id="owner__details__collapse"
            className="accordion-collapse collapse show"
            aria-labelledby="owner__details"
            data-bs-parent="#preview__accrodion">
            <div className={`accordion-body ${style.preview__accrodion__body}`}>
              <OwnerDetailsFields {...props} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="renter_details">
            <button
              className={`accordion-button ${style.preview__accordion__header}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#renter_details__collapse"
              aria-expanded="true"
              aria-controls="renter_details__collapse">
              {config.form.renterDetails.title}
            </button>
          </h2>
          <div
            id="renter_details__collapse"
            className="accordion-collapse collapse"
            aria-labelledby="renter_details"
            data-bs-parent="#preview__accrodion">
            <div className={`accordion-body ${style.preview__accrodion__body}`}>
              <RenterDetailsFields {...props} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="agreement">
            <button
              className={`accordion-button ${style.preview__accordion__header}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#agreement__collapse"
              aria-expanded="true"
              aria-controls="agreement__collapse">
              {config.form.agreement.title}
            </button>
          </h2>
          <div
            id="agreement__collapse"
            className="accordion-collapse collapse"
            aria-labelledby="agreement"
            data-bs-parent="#preview__accrodion">
            <div className={`accordion-body ${style.preview__accrodion__body}`}>
              <AgreementFields {...props} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="mailing__details">
            <button
              className={`accordion-button ${style.preview__accordion__header}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mailing__details__collapse"
              aria-expanded="true"
              aria-controls="mailing__details__collapse">
              {config.form.mailingDetails.title}
            </button>
          </h2>
          <div
            id="mailing__details__collapse"
            className="accordion-collapse collapse"
            aria-labelledby="mailing__details"
            data-bs-parent="#preview__accrodion">
            <div className={`accordion-body ${style.preview__accrodion__body}`}>
              <MailingDetailsField {...props} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="delivery__details">
            <button
              className={`accordion-button ${style.preview__accordion__header}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#delivery__details__collapse"
              aria-expanded="true"
              aria-controls="delivery__details__collapse">
              {config.form.deliveryDetails.title}
            </button>
          </h2>
          <div
            id="delivery__details__collapse"
            className="accordion-collapse collapse"
            aria-labelledby="delivery__details"
            data-bs-parent="#preview__accrodion">
            <div className={`accordion-body ${style.preview__accrodion__body}`}>
              <DeliveryDetailsFields {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PreviewDetails;
