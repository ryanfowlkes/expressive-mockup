import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MethodButton(props) {
  return (
    <button className="MethodButton" onClick={() => {props.clickMe(props.method)}}>
      {props.method}
    </button>
  )
}

MethodButton.propTypes = {
  method: PropTypes.string,
  clickMe: PropTypes.func
}



module.exports = MethodButton;
