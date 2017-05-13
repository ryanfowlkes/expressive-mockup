import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ToggleLineDisplay(props) {
  return (
    <div className="ToggleLineDisplay" onClick = {()=> {props.eventHandlers.toggleReportLine()}}>

    </div>
  )
}

ToggleLineDisplay.propTypes = {
  eventHandlers: PropTypes.object,
}
module.exports = ToggleLineDisplay;
