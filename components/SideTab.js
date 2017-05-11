import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SideTab(props) {
  const innerHTML = props.tabType === 'settings' ? 'Settings' : <img id="ExpressiveLogo" src="./../images/whiteEXPRLogo.png"/>
  return (
    <div className="SideTab">
      {innerHTML}
    </div>
  )
}

module.exports = SideTab;
