import React from 'react';
import PropTypes from 'prop-types';

export default function Overlay({ noIcon, showOverlay }) {
  const classes = ['overlay', 'animating', 'react-hidden'];

  if (noIcon) {
    classes.push('no-icon');
  }
  if (showOverlay) {
    classes.push('react-hidden--show');
  }

  return (
    <div className={classes.join(' ')}>
      <span className="overlay__icon icon-spinner6" />
    </div>
  );
}

Overlay.defaultProps = {
  noIcon: false,
};

Overlay.propTypes = {
  showOverlay: PropTypes.bool.isRequired,
  noIcon: PropTypes.bool,
};
