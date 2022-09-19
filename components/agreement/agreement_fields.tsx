import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../env/env.json';
import { IAgreement } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import Input from '../fields/input';
import TextArea from '../fields/text_area';
import { addAgreement } from '../../features/formslice';
import Select from '../fields/select';

export default function AgreementFields(props: FormikProps<IAgreement>) {
  const formFields = env.form.agreement;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addAgreement(props.values));
    props.handleChange(event);
  };
  /*
    @return jsx Element
    *form 1 fields
  */
  return (
    <div className={`card-body ${style.card__body}`}>
      <div className={style.form__content__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.doaLabel}
            id={formFields.agreementKeys[0]}
            errorMsg={props.errors.doa}
            touchField={props.touched.doa}
            value={props.values.doa}
            type={'date'}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.advanceLabel}
            id={formFields.agreementKeys[1]}
            errorMsg={props.errors.advanceAmountPaid}
            touchField={props.touched.advanceAmountPaid}
            value={props.values.advanceAmountPaid}
            type={'number'}
          />
        </div>
      </div>
      <div className={style.form__content__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.rentLabel}
            id={formFields.agreementKeys[2]}
            errorMsg={props.errors.monthlyRent}
            touchField={props.touched.monthlyRent}
            value={props.values.monthlyRent}
            type={'number'}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.addressLabel}
            id={formFields.agreementKeys[3]}
            errorMsg={props.errors.propertyLocation}
            touchField={props.touched.propertyLocation}
            value={props.values.propertyLocation}
            formValue={formFields.rentedOptions}
            defaultValue={''}
          />
        </div>
      </div>
      <div className={style.form__content__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.addressLabel}
            id={formFields.agreementKeys[4]}
            errorMsg={props.errors.addressOfProperty}
            touchField={props.touched.addressOfProperty}
            value={props.values.addressOfProperty}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.clauseLabel}
            id={formFields.agreementKeys[5]}
            errorMsg={props.errors.clauses}
            touchField={props.touched.clauses}
            value={props.values.clauses}
            toolTip={formFields.clauseTooltip}
          />
        </div>
      </div>
      <div className={style.form__content__area}>
        <label className="me-2"></label>
        <div className={`form-group ${style.content__area__100}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.propertyLabel}
            id={formFields.agreementKeys[6]}
            errorMsg={props.errors.propertyDetails}
            touchField={props.touched.propertyDetails}
            value={props.values.propertyDetails}
          />
        </div>
      </div>
    </div>
  );
}
