import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../config/config.json';
import { IDeliveryDetails } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import Input from '../fields/input';
import TextArea from '../fields/text_area';
import { addDeliveryDetails } from '../../features/formslice';
import Select from '../fields/select';

export default function DeliveryDetailsFields(
  props: FormikProps<IDeliveryDetails>,
) {
  const formFields = env.form.deliveryDetails;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addDeliveryDetails(props.values));
    props.handleChange(event);
  };
  /*
    @return jsx Element
    *form 1 fields
  */
  return (
    <div className={`card-body ${style.card__body}`}>
      <div className={style.form__content__area}>
        <div className={'form-group'}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.postalLabel}
            id={formFields.deliveryKeys[0]}
            errorMsg={props.errors.postal}
            touchField={props.touched.postal}
            value={props.values.postal}
            formValue={formFields.postalOptions}
            defaultValue={''}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.nameLabel}
            id={formFields.deliveryKeys[1]}
            errorMsg={props.errors.contactName}
            touchField={props.touched.contactName}
            value={props.values.contactName}
          />
        </div>
      </div>
      <div className={style.form__content__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.contactLabel}
            id={formFields.deliveryKeys[2]}
            errorMsg={props.errors.contactNumber}
            touchField={props.touched.contactNumber}
            value={props.values.contactNumber}
            toolTip={formFields.contactTooltip}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <label className="me-1">*</label>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.emailLabel}
            id={formFields.deliveryKeys[3]}
            errorMsg={props.errors.email}
            touchField={props.touched.email}
            value={props.values.email}
          />
        </div>
      </div>
      <div className={style.form__content__area}>
        <div className={`form-group ${style.content__area__70}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.mailingLabel}
            id={formFields.deliveryKeys[4]}
            errorMsg={props.errors.mailingAddress}
            touchField={props.touched.mailingAddress}
            value={props.values.mailingAddress}
          />
        </div>
        <div className={`form-group ${style.content__area__30}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.pincodeLabel}
            id={formFields.deliveryKeys[5]}
            errorMsg={props.errors.pincode}
            touchField={props.touched.pincode}
            value={props.values.pincode}
          />
        </div>
      </div>
    </div>
  );
}
