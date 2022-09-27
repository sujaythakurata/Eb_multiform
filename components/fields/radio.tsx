import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import style from '../../styles/field.module.scss';

type IRadio = FormikProps<any> & {
  id: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onBlur: (event: ChangeEvent<any>) => void;
  errorMsg: string | undefined;
  touchField: boolean | undefined;
  value: string;
  formValue: Array<string>;
  testId?: string;
};

export default function Radio(props: IRadio) {
  return (
    <>
      <label className="m-1">{props.label}</label>
      <div className={style.radio__area}>
        {props.formValue.map((value, index) => (
          <div
            className={`form-check form-check-inline ${style.radio}`}
            key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={props.id}
              id={`${props.id}-${index}`}
              onChange={props.handleChange}
              onBlur={props.onBlur}
              checked={props.value === value}
              value={value}
              data-testid={`${props.testId}-${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`${props.id}-${index}`}
              data-testid={`${props.testId}-${index}-label`}>
              {value}
            </label>
          </div>
        ))}
      </div>
      <div id={`aria${props.id}`} className="form-text text-warning">
        {props.touchField && props.errorMsg ? props.errorMsg : null}
      </div>
    </>
  );
}
