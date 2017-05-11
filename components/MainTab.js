import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MainTab(props) {
  const method = props.routeId.split(' ')[0].slice(0,1) + props.routeId.split(' ')[0].slice(1).toLowerCase();

  return (
    <div className="MainTab">
      {props.routeId}
    </div>
  )
}

MainTab.propTypes = {
  routeId: PropTypes.string
}

module.exports = MainTab;
