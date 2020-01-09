import React from 'react';

const InputMutable = ({
  unit, label, value, onChange,
}) => (
  <div className="calc__sliders">
    <h4 className="results-container__header">
      {label}
    </h4>
    <span className="input-text irs-value calc-value" data-unit={unit}>
      <input
        type="text"
        className=""
        defaultValue={value}
        onChange={e => onChange(e)}
      />
    </span>
  </div>
);

InputMutable.defaultProps = {
  unit: 'zł',
  value: 0,
};

export default InputMutable;
