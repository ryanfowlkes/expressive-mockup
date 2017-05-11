import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import MainDisplay from './MainDisplay.js';
import PropTypes from 'prop-types';

import jsonInterface from './../js/jsonInterface.js';
const xpr  = require('json!./../expressive.json');

function getInitialState() {
  return {
    reports: jsonInterface.getReports(xpr),
    openMethodButtons: []
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();

    this.onMethodButtonClick = this.onMethodButtonClick.bind(this);
  }

  render() {
    const routeIds = Object.keys(this.state.reports);

    const sidebarEventHandlers = {
      onMethodButtonClick: this.onMethodButtonClick,
    }

    const forRouteTree = {
      openMethodButtons: this.state.openMethodButtons,
    }

    return (
      <div id="App">
        <Sidebar routeIds={routeIds} eventHandlers={sidebarEventHandlers} forRouteTree={forRouteTree}/>
        <MainDisplay />
      </div>
    )
  }

  //Methods for child components!

  onMethodButtonClick(method) {
    const openMethodButtons = this.state.openMethodButtons.slice();
    if (openMethodButtons.includes(method)) openMethodButtons.splice(openMethodButtons.indexOf(method), 1);
    else openMethodButtons.push(method);
    this.setState({openMethodButtons});
  }


}

module.exports = App;
