import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../env/env.json';
import { IRenterDetails } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import { addRenterDetails } from '../../features/formslice';
import Input from '../fields/input';
import Radio from '../fields/radio';
import TextArea from '../fields/text_area';

export default function RenterDetailsFields(
  props: FormikProps<IRenterDetails>,
) {
  const formFields = env.form.renterDetails;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addRenterDetails(props.values));
    props.handleChange(event);
  };
  /*
    @return jsx Element
    *form 1 fields
  */
  return (
    <div className={`card-body ${style.card__body}`}>
      <div className={`${style.form__content__area} row`}>
        <div className={`form-group ${style.content__area__30}`}>
          <Radio
            {...props}
            onBlur={onBlur}
            label={formFields.titleLabel}
            id={formFields.renterKeys[0]}
            errorMsg={props.errors.renterDesgination}
            touchField={props.touched.renterDesgination}
            value={props.values.renterDesgination}
            formValue={formFields.titleOptions}
          />
        </div>
        <div className={`form-group ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.nameLabel}
            id={formFields.renterKeys[1]}
            errorMsg={props.errors.renterName}
            touchField={props.touched.renterName}
            value={props.values.renterName}
          />
        </div>
      </div>
      <div className={`${style.form__content__area} row`}>
        <div className={`form-group ${style.content__area__30}`}>
          <Radio
            {...props}
            onBlur={onBlur}
            label={formFields.relationLabel}
            id={formFields.renterKeys[2]}
            errorMsg={props.errors.renterRelation}
            touchField={props.touched.renterRelation}
            value={props.values.renterRelation}
            formValue={formFields.relationOptions}
          />
        </div>
        <div className={`form-group  ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.relationNameLabel}
            id={formFields.renterKeys[3]}
            errorMsg={props.errors.renterRelationName}
            touchField={props.touched.renterRelationName}
            value={props.values.renterRelationName}
          />
        </div>
      </div>
      <div className={`${style.form__content__area} row`}>
        <div className={`form-group ${style.content__area__100}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.addressLabel}
            id={formFields.renterKeys[4]}
            errorMsg={props.errors.renterAddress}
            touchField={props.touched.renterAddress}
            value={props.values.renterAddress}
          />
        </div>
      </div>
    </div>
  );
}
