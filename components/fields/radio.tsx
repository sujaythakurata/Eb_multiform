import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';

type IRadio = FormikProps<any> & {
  id: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onBlur: (event: ChangeEvent<any>) => void;
  errorMsg: string | undefined;
  touchField: boolean | undefined;
  value: string;
  formValue: Array<string>;
};

export default function Radio(props: IRadio) {
  return (
    <>
      <label className="m-1">{props.label}</label>
      {props.formValue.map((value, index) => (
        <div className="form-check form-check-inline" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name={props.id}
            id={`${props.id}-${index}`}
            onChange={props.handleChange}
            onBlur={props.onBlur}
            checked={props.value === value}
            value={value}
          />
          <label className="form-check-label" htmlFor={`${props.id}-${index}`}>
            {value}
          </label>
        </div>
      ))}
      <div id={`aria${props.id}`} className="form-text text-danger">
        {props.touchField && props.errorMsg ? props.errorMsg : null}
      </div>
    </>
  );
}
