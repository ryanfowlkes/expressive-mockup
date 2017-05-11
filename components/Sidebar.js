import React, { Component } from 'react';
import SideTabsMenu from './SideTabsMenu.js';
import RouteTree from './RouteTree.js';
import Settings from './Settings.js';
import PropTypes from 'prop-types';

function getInitialState() {
  return {
    viewSettings: false
  }
}

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }


  render() {
    const routeTreeEventHandlers = {
      onMethodButtonClick: this.props.eventHandlers.onMethodButtonClick
    }

    return (
      <div id="Sidebar">
        <SideTabsMenu />
        <RouteTree routeIds={this.props.routeIds} eventHandlers={routeTreeEventHandlers} methodDisplayInfo={this.props.forRouteTree}/>
      </div>
    )
  }
}

Sidebar.propTypes = {
  routeIds: PropTypes.array,
  eventHandlers: PropTypes.object,
  forRouteTree: PropTypes.object
}

module.exports = Sidebar;
