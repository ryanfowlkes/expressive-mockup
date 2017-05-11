import React, { Component } from 'react';
import PropTypes from 'prop-types';

function RouteButton(props) {
  return (
    <button className="RouteButton">
      {props.route}
    </button>
  )
}

RouteButton.propTypes = {
  route: PropTypes.string
}

module.exports = RouteButton;
