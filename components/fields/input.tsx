import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';

type IInput = FormikProps<any> & {
  id: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onBlur: (event: ChangeEvent<any>) => void;
  errorMsg: string | undefined;
  touchField: boolean | undefined;
  value: string;
};
export default function Input(props: IInput) {
  return (
    <>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type="text"
        className="form-control"
        name={props.id}
        id={props.id}
        aria-describedby={`aria${props.id}`}
        onChange={props.handleChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      <div id={`aria${props.id}`} className="form-text text-danger">
        {props.touchField && props.errorMsg ? props.errorMsg : null}
      </div>
    </>
  );
}
