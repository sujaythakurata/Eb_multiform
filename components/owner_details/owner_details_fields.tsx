import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../config/config.json';
import { IOwnerDetails } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import { addOwnerDetails } from '../../features/formslice';
import Input from '../fields/input';
import Radio from '../fields/radio';
import TextArea from '../fields/text_area';

export default function OwnerDetailsFields(props: FormikProps<IOwnerDetails>) {
  const formFields = env.form.ownerDetails;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addOwnerDetails(props.values));
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
            id={formFields.ownerKeys[0]}
            errorMsg={props.errors.ownerDesignation}
            touchField={props.touched.ownerDesignation}
            value={props.values.ownerDesignation}
            formValue={formFields.titleOptions}
          />
        </div>
        <div className={`form-group ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.nameLabel}
            id={formFields.ownerKeys[1]}
            errorMsg={props.errors.ownerName}
            touchField={props.touched.ownerName}
            value={props.values.ownerName}
          />
        </div>
      </div>
      <div className={`${style.form__content__area} row`}>
        <div className={`form-group ${style.content__area__30}`}>
          <Radio
            {...props}
            onBlur={onBlur}
            label={formFields.relationLabel}
            id={formFields.ownerKeys[2]}
            errorMsg={props.errors.ownerRelation}
            touchField={props.touched.ownerRelation}
            value={props.values.ownerRelation}
            formValue={formFields.relationOptions}
          />
        </div>
        <div className={`form-group  ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.relationNameLabel}
            id={formFields.ownerKeys[3]}
            errorMsg={props.errors.ownerRelationName}
            touchField={props.touched.ownerRelationName}
            value={props.values.ownerRelationName}
          />
        </div>
      </div>
      <div className={`${style.form__content__area} row`}>
        <div className={`form-group ${style.content__area__100}`}>
          <TextArea
            {...props}
            onBlur={onBlur}
            label={formFields.addressLabel}
            id={formFields.ownerKeys[4]}
            errorMsg={props.errors.ownerAddress}
            touchField={props.touched.ownerAddress}
            value={props.values.ownerAddress}
          />
        </div>
      </div>
    </div>
  );
}
