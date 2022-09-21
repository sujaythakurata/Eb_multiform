import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../config/config.json';
import { IMailingDetails } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import Input from '../fields/input';
import { addMailingDetails } from '../../features/formslice';
import Select from '../fields/select';

export default function MailingDetailsField(
  props: FormikProps<IMailingDetails>,
) {
  const formFields = env.form.mailingDetails;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addMailingDetails(props.values));
    props.handleChange(event);
  };
  /*
    @return jsx Element
    *form 1 fields
  */
  return (
    <div className={style.form__field__main__area}>
      <div className={style.form__field__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.dutyLabel}
            id={formFields.mailingKeys[0]}
            errorMsg={props.errors.stampDutyAmount}
            touchField={props.touched.stampDutyAmount}
            value={props.values.stampDutyAmount}
            formValue={formFields.dutyOptions}
            defaultValue={0}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.notaryLabel}
            id={formFields.mailingKeys[1]}
            errorMsg={props.errors.notarySeal}
            touchField={props.touched.notarySeal}
            value={props.values.notarySeal}
            formValue={formFields.notarOptions}
            toolTip={formFields.notaryTooltip}
            defaultValue={''}
          />
        </div>
      </div>
      <div className={style.form__field__area}>
        <div className={`form-group ${style.content__area__50}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.codeLabel}
            id={formFields.mailingKeys[2]}
            errorMsg={props.errors.code}
            touchField={props.touched.code}
            value={props.values.code}
          />
        </div>
        <div className={`form-group ${style.content__area__50}`}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.feeLabel}
            id={formFields.mailingKeys[3]}
            errorMsg={props.errors.paidBy}
            touchField={props.touched.paidBy}
            value={props.values.paidBy}
            formValue={formFields.feeOptions}
            defaultValue={''}
          />
        </div>
      </div>
      <div className={style.form__field__area}>
        <label className="me-1"></label>
        <div className={`form-group ${style.content__area__100}`}>
          <Select
            {...props}
            onBlur={onBlur}
            label={formFields.deliveryLabel}
            id={formFields.mailingKeys[4]}
            errorMsg={props.errors.delivery}
            touchField={props.touched.delivery}
            value={props.values.delivery}
            formValue={formFields.deliveryOptions}
            toolTip={formFields.deliveryTooltip}
            defaultValue={''}
          />
        </div>
      </div>
    </div>
  );
}
