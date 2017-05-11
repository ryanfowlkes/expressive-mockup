import React, { Component } from 'react';
import MainTabsMenu from './MainTabsMenu.js';
import Report from './Report.js';
import PropTypes from 'prop-types';

class MainDisplay extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div id="MainDisplay">
        <MainTabsMenu openTabs={this.props.tabInfo.openTabs} activeTab={this.props.tabInfo.activeTab}/>
        <Report />
      </div>
    )
  }
}

MainDisplay.propTypes = {
  tabInfo: PropTypes.object,
  reports: PropTypes.object
}

module.exports = MainDisplay;
