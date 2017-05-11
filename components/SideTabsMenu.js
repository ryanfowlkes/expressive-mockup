import React, { Component } from 'react';
import SideTab from './SideTab.js';
import PropTypes from 'prop-types';

function SideTabsMenu(props) {
  return (
    <div id="SideTabsMenu">
      <SideTab tabType="expressive"/>
      <SideTab tabType="settings"/>
    </div>
  )
}

module.exports = SideTabsMenu;
