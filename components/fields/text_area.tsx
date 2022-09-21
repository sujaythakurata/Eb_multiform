import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import ToolTip from './tooltip';
import style from '../../styles/field.module.scss';

type ITextArea = FormikProps<any> & {
  id: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onBlur: (event: ChangeEvent<any>) => void;
  errorMsg: string | undefined;
  touchField: boolean | undefined;
  value: string;
  toolTip?: string;
};
export default function TextArea(props: ITextArea) {
  return (
    <>
      <label htmlFor={props.id} className="form-label">
        {props.toolTip ? <ToolTip title={props.toolTip} /> : ''}
        {props.label}
      </label>
      <textarea
        className={`form-control ${style.input__field}`}
        name={props.id}
        id={props.id}
        aria-describedby={`aria${props.id}`}
        onChange={props.handleChange}
        onBlur={props.onBlur}
        value={props.value}></textarea>
      <div id={`aria${props.id}`} className="form-text text-warning">
        {props.touchField && props.errorMsg ? props.errorMsg : null}
      </div>
    </>
  );
}
