import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioButton extends Component {

  getActiveButton() {
    return this.props.checked ? ' active' : '';
  }

  getButtonText(text) {
    if (text.length) {
      text = (
        <small>
          {text}
        </small>
      );
    }

    return text;
  }

  getButtonImage() {
    let image = '';
    const colors = {
      white: '#fff',
      blue: '#004c9a',
    };

    if (this.props.name === 'depoCurr') {
      image = (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="image">
          {this.props.label.toLowerCase() === 'pln' &&
            <path
              id="pln"
              d="M22101,10625a26.915,26.915,0,1,1,10.51-2.121A26.833,26.833,0,0,1,22101,10625Zm2.506-25.424h0V10608H22116v-3.56h-7.936v-6.143l2.521-.7v-2.35l-2.521.7v-7.147h-4.559v8.425l-1.762.488v2.35l1.76-.489Zm-8.441-7.2-9.014,13.185V10608h14.729v-3.56h-9.037l8.947-13.262v-2.377H22086v3.576Z"
              transform="translate(-22074 -10570.998)"
              fill={this.props.checked ? colors.white : colors.blue}
            />
          }
          {this.props.label.toLowerCase() === 'eur' &&
            <path
              id="euro"
              d="M22043,10625a26.911,26.911,0,1,1,10.51-2.121A26.857,26.857,0,0,1,22043,10625Zm-11.881-20.76a16,16,0,0,0,26.42,4.7l-3.627-3.622c-.131.144-.246.263-.361.376a10.909,10.909,0,0,1-16.611-1.451h6.359l2.908-5.116h-11.172a10.663,10.663,0,0,1-.061-1.125c0-.379.021-.756.061-1.151h12.463l2.9-5.117h-13.437a10.88,10.88,0,0,1,16.588-1.418c.133.133.252.256.361.377l3.627-3.623a16.011,16.011,0,0,0-26.408,4.664H22028v5.118h1.895c-.02.34-.039.742-.039,1.151,0,.388.012.756.039,1.125H22028v5.117Z"
              transform="translate(-22015.998 -10571.001)"
              fill={this.props.checked ? colors.white : colors.blue}
            />
          }
          {this.props.label.toLowerCase() === 'usd' &&
            <path
              id="usd"
              d="M27,54A27,27,0,0,1,0,27,27,27,0,0,1,27,0,27,27,0,0,1,54,27,27,27,0,0,1,27,54ZM22.06,33.26h0L19,36.39a9.13,9.13,0,0,0,6,3.81v3.56h4.16v-3.6a9.42,9.42,0,0,0,5-2.72,7.08,7.08,0,0,0,2-4.85A6.65,6.65,0,0,0,33.18,27,20.3,20.3,0,0,0,27.9,25l-.87-.2c-.57-.13-1.22-.27-1.81-.44a4.79,4.79,0,0,1-1.8-.8l-.05-.05a3.18,3.18,0,0,1-1.21-2.36,1.67,1.67,0,0,1,0-.31,3.28,3.28,0,0,1,1.19-2,4.17,4.17,0,0,1,.78-.54l.07,0h0a5.9,5.9,0,0,1,2-.63,6.27,6.27,0,0,1,1.58,0,5.9,5.9,0,0,1,2,.63h0l.07,0a4.17,4.17,0,0,1,.78.54,3.53,3.53,0,0,1,1.12,1.69l1.55-1.57L35,17.36A8.88,8.88,0,0,0,30,13.78a4.45,4.45,0,0,0-.58-.15l-.2,0h-.12V10H24.92v3.6a9.42,9.42,0,0,0-5,2.72,7.06,7.06,0,0,0-2,4.85,6.65,6.65,0,0,0,2.82,5.64,20.81,20.81,0,0,0,5.28,1.94l.75.17L27,29h0c.56.12,1.2.26,1.79.43a4.81,4.81,0,0,1,1.79.8s0,0,.05.05a3.22,3.22,0,0,1,1.22,2.36,3.22,3.22,0,0,1-1.22,2.35,6,6,0,0,1-7.44,0,3.53,3.53,0,0,1-1.12-1.69Z"
              fill={this.props.checked ? colors.white : colors.blue}
            />
          }
          {this.props.label.toLowerCase() === 'chf' &&
            <path
              id="chf"
              d="M51.88,16.49a27,27,0,0,0-49.76,0A27,27,0,0,0,16.49,51.88,27,27,0,0,0,51.88,37.51a27.11,27.11,0,0,0,0-21Zm-13.9-1H25.82v8.65h11v4.65h-11v5.8H32.4V37H25.82v6.15H19.74V37H16V34.62h3.72V10.87H38Z"
              fill={this.props.checked ? colors.white : colors.blue}
            />
          }
        </svg>
      );
    }

    return image;
  }

  render() {
    return (
      <li className="calc__group__item">
        <span
          className={'choose-buttons' + this.getActiveButton()}
          data-name={this.props.name}
          data-value={this.props.label}
          data-index={this.props.index}
          onClick={this.props.onChange}
        >
          <label>
            {this.getButtonImage()}
            {this.props.label}
            {this.props.buttonText &&
              <small> {this.props.buttonText} </small>
            }
          </label>
        </span>
      </li>
    );
  }
}

RadioButton.defaultProps = {
  buttonText: '',
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
