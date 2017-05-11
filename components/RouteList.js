import React, { Component } from 'react';
import RouteButton from './RouteButton.js';
import PropTypes from 'prop-types';

function RouteList(props) {
  const routeButtons = props.routeList.map((route, i) => <RouteButton route={route} key={i}/>)
  const classString = props.isOpen ? 'RouteList openRouteList' : 'RouteList closedRouteList';

  return (
    <div className={classString}>
      {routeButtons}
    </div>
  )
}

RouteList.propTypes = {
  isOpen: PropTypes.bool,
  routeList: PropTypes.array
}

module.exports = RouteList;
