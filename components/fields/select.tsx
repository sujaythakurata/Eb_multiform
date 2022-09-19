import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import ToolTip from './tooltip';

type ISelect = FormikProps<any> & {
  id: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onBlur: (event: ChangeEvent<any>) => void;
  errorMsg: string | undefined;
  touchField: boolean | undefined;
  value: string | number;
  formValue: Array<string> | Array<number>;
  toolTip?: string;
  defaultValue: string | number;
};

export default function Select(props: ISelect) {
  return (
    <>
      <label className="m-1">
        {props.toolTip ? <ToolTip title={props.toolTip} /> : ''}
        {props.label}
      </label>
      <select
        className="form-select"
        aria-label={props.label}
        name={props.id}
        id={props.id}
        onChange={props.handleChange}
        onBlur={props.onBlur}
        value={props.value}>
        <option value={props.defaultValue}>select {props.label}</option>
        {props.formValue.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div id={`aria${props.id}`} className="form-text text-danger">
        {props.touchField && props.errorMsg ? props.errorMsg : null}
      </div>
    </>
  );
}
