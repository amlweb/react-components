import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipFunctions from '../../modal/globals/globalTooltip';

export default class Tooltip extends Component {

  componentDidMount() {
    TooltipFunctions.enable();
  }

  render() {
    return (
      <span className={`js-tooltip ${this.props.additionalClass}`}>
        <span className="icon-infotip">
          <span className="js-tooltip__content hidden">
            {this.props.text}
          </span>
        </span>
      </span>
    );
  }

}

Tooltip.defaultProps = {
  additionalClass: '',
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
};
