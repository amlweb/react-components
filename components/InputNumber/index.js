import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import jsPrettyNumbersInit from '../../prettyNumbers';

export default class InputNumber extends Component {
  componentDidMount() {
    jsPrettyNumbersInit.enable();

    this.state = {
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  componentDidUpdate() {
    $(this.inputNumber).val(this.props.value).triggerHandler('change.prettyNumber');
  }

  handleBlur(e) {
    this.initChange(e.target.value);
  }

  handleChange(e) {
    this.initChange(e.target.value, 2000, () => {
      this.inputNumber.blur();
    });
  }

  handleKeyPress(e) {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (/\D/.test(keyValue)) {
      e.preventDefault();
    }

    if (keyCode === 13) {
      this.inputNumber.blur();
    }
  }

  initChange(value, timeout = 0, callback = () => {}) {
    if (value === '') { return; }

    value = parseFloat(value.replace(/\s/g, ''), 10);

    if (isNaN(value) || value === this.state.value) { return; }

    if (this.props.min && value < this.props.min) { value = this.props.min; }
    if (this.props.max && value > this.props.max) { value = this.props.max; }

    clearTimeout(this.delayedFromInput);
    this.delayedFromInput = setTimeout(() => {
      this.setState({ value: value });
      this.props.onChange(this.inputNumber.name, value);
      callback();
    }, timeout);
  }

  render() {
    return (
      <div className="calc-input">
        <label className="calc-input__header">
          {this.props.label}
          {this.props.tooltip &&
            <Tooltip text={this.props.tooltip} />
          }
        </label>
        <div className="calc-input__input-wrapper" data-unit={this.props.currency}>
          <input
            ref={el => { this.inputNumber = el; }}
            type="text"
            className="calc-input__input js-pretty-number"
            maxLength={this.props.maxlength.toString()}
            name={this.props.name}
            onKeyPress={e => this.handleKeyPress(e)}
            onChange={e => this.handleChange(e)}
            onBlur={e => this.handleBlur(e)}
          />
        </div>
      </div>
    );
  }

}

InputNumber.defaultProps = {
  label: '',
  currency: 'zł',
  value: 1000,
  min: 0,
  max: null,
  maxlength: 6,
  onChange: () => {},
  tooltip: '',
};

InputNumber.propTypes = {
  label: PropTypes.string,
  currency: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxlength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
};
