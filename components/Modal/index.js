import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    const modalStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
    const windowStyle = {
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div className="modal__wrapper" style={{ modalStyle }}>
        <div className={`modal modal--popup  ${this.props.additionalClass}`} style={{ windowStyle }}>
          <div className="modal__close icon-close" onClick={this.props.onClose}></div>
          <div className="modal__content">
            {this.props.children}
          </div>
        </div>
        <div className="overlay fixed top no-icon animating" onClick={this.props.onClose}></div>
      </div>
    );
  }

}

Modal.defaultProps = {
  additionalClass: '',
  show: false,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  additionalClass: PropTypes.string,
};

export default Modal;
