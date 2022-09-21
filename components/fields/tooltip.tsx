import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

export default function ToolTip({ title }: { title: string | undefined }) {
  const [tooltip, showTooltip] = useState(true);
  const mark = Math.random() * 10;
  return (
    <span>
      <i
        className="fa fa-info-circle me-2"
        data-toggle="tooltip"
        style={{ cursor: 'pointer' }}
        data-html={true}
        data-tip
        data-type="warning"
        data-for={`${mark}`}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false);
          setTimeout(() => showTooltip(true), 50);
        }}></i>
      {tooltip && (
        <ReactTooltip id={`${mark}`} effect="solid" html={true}>
          {`<div className="card">
            <div className="card-header bg-info">
              <h5>Info</h5>
            </div>
            <div className="card-body">${title}</div>
          </div>`}
        </ReactTooltip>
      )}
    </span>
  );
}
