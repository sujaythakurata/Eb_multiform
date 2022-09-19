import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/home.module.scss';
import env from '../../env/env.json';
import { IForm1 } from '../../types/form';
import { useAppDispatch } from '../../states/hook';
import { addForm1 } from '../../features/formslice';
import Input from '../fields/input';
import Radio from '../fields/radio';
import TextArea from '../fields/text_area';

export default function Form1Fields(props: FormikProps<IForm1>) {
  const formFields = env.form.form1;
  const dispatch = useAppDispatch();
  /*
   *@return void
   *onblur save the form data
   */
  const onBlur = (event: ChangeEvent<any>) => {
    dispatch(addForm1(props.values));
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
            label={formFields.label1}
            id={formFields.keys[0]}
            errorMsg={props.errors.ownerDesignation}
            touchField={props.touched.ownerDesignation}
            value={props.values.ownerDesignation}
            formValue={formFields.value1}
          />
        </div>
        <div className={`form-group ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.label2}
            id={formFields.keys[1]}
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
            label={formFields.label3}
            id={formFields.keys[2]}
            errorMsg={props.errors.ownerRelation}
            touchField={props.touched.ownerRelation}
            value={props.values.ownerRelation}
            formValue={formFields.value2}
          />
        </div>
        <div className={`form-group  ${style.content__area__70}`}>
          <Input
            {...props}
            onBlur={onBlur}
            label={formFields.label4}
            id={formFields.keys[3]}
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
            label={formFields.label5}
            id={formFields.keys[4]}
            errorMsg={props.errors.ownerAddress}
            touchField={props.touched.ownerAddress}
            value={props.values.ownerAddress}
          />
        </div>
      </div>
    </div>
  );
}
