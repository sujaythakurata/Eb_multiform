import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import style from '../styles/sidebar.module.scss';
import config from '../config/config.json';
import { useAppDispatch, useAppSelector } from '../states/hook';
import { setNextForm } from '../features/formslice';

export default function SideBar() {
  const [tooltip, showTooltip] = useState(true);
  const curForm = useAppSelector(state => state.form.curForm);
  const dispatch = useAppDispatch();
  const handelClick = (state: number) => {
    dispatch(setNextForm(state));
  };
  return (
    <div className={style.sidebar}>
      <div className={style.status__box__start} key={10}>
        <div className={style.status__circle}>
          <div className={style.inner__circle}></div>
        </div>
      </div>
      {config.form.totalNumberForms.map((value, index) => (
        <div className={style.status__box} key={index}>
          <div
            className={`${style.status__bar} ${
              value.state < curForm ? style.status__bar__select : ''
            }`}></div>
          <div
            className={style.status__circle}
            onClick={() => handelClick(value.state)}
            data-testid={`tooltip-test-${value.state}`}
            data-toggle="tooltip"
            data-html={true}
            data-tip
            data-type="warning"
            data-for={`${value.state}`}
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}>
            {value.state < curForm ? (
              <i className="fa fa-check"></i>
            ) : (
              <div
                className={`${style.inner__circle} ${
                  value.state === curForm ? style.inner__circle__select : ''
                }`}></div>
            )}
            {tooltip && (
              <ReactTooltip id={`${value.state}`} effect="solid" html={true}>
                {`<span data-testid="tooltip-test-title-${value.state}">${value.title}</span>`}
              </ReactTooltip>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
