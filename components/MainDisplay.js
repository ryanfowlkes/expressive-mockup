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
        <MainTabsMenu />
        <Report />
      </div>
    )
  }
}

module.exports = MainDisplay;
