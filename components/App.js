import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import MainDisplay from './MainDisplay.js';
import PropTypes from 'prop-types';

import jsonInterface from './../js/jsonInterface.js';
const xpr  = require('json!./../expressive.json');

function getInitialState() {
  return {
    reports: jsonInterface.getReports(xpr),
    openMethodButtons: [],
    isRouteTreeView: true,
    activeTab: '',
    openTabs: []
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();

    this.onMethodButtonClick = this.onMethodButtonClick.bind(this);
    this.onSideTabClick = this.onSideTabClick.bind(this);
    this.onRouteButtonClick = this.onRouteButtonClick.bind(this);
    this.onMainTabClick = this.onMainTabClick.bind(this);
    this.escapeTab = this.escapeTab.bind(this);
  }

  render() {
    const routeIds = Object.keys(this.state.reports);

    const sidebarEventHandlers = {
      onMethodButtonClick: this.onMethodButtonClick,
      onSideTabClick: this.onSideTabClick,
      onRouteButtonClick: this.onRouteButtonClick
    }

    const forRouteTree = {
      openMethodButtons: this.state.openMethodButtons,
      routeIds: routeIds
    }

    const tabInfo = {
      activeTab: this.state.activeTab,
      openTabs: this.state.openTabs
    }

    const mainDisplayEventHandlers = {
      onMainTabClick: this.onMainTabClick,
      escapeTab: this.escapeTab
    }

    return (
      <div id="App">
        <Sidebar isRouteTreeView={this.state.isRouteTreeView} eventHandlers={sidebarEventHandlers} forRouteTree={forRouteTree}/>
        <MainDisplay tabInfo={tabInfo} reports={this.state.reports} eventHandlers={mainDisplayEventHandlers}/>
      </div>
    )
  }

  //Methods for child components!

  onSideTabClick(tabType) {
    let currTab = this.state.isRouteTreeView ? 'expressive' : 'settings';
    if (tabType !== currTab) this.setState({isRouteTreeView: (tabType === 'expressive')})
  }

  onMethodButtonClick(method) {
    const openMethodButtons = this.state.openMethodButtons.slice();
    if (openMethodButtons.includes(method)) openMethodButtons.splice(openMethodButtons.indexOf(method), 1);
    else openMethodButtons.push(method);
    this.setState({openMethodButtons});
  }

  onRouteButtonClick(routeId) {
    const openTabs = this.state.openTabs.slice();
    if (!openTabs.includes(routeId)) openTabs.push(routeId);
    let activeTab = routeId;
    this.setState({openTabs, activeTab});
  }

  onMainTabClick(routeId) {
    if (this.state.activeTab !== routeId && this.state.openTabs.includes(routeId)) this.setState({activeTab: routeId});
  }

  escapeTab(routeId) {
    const openTabs = this.state.openTabs.slice();
    openTabs.splice(openTabs.indexOf(routeId), 1);
    let activeTab;
    if (routeId === this.state.activeTab && !openTabs.length) activeTab = '';
    else if (routeId === this.state.activeTab) activeTab = openTabs[0];
    else {
      activeTab = this.state.activeTab;
    }
    this.setState({activeTab, openTabs});
  }

}

module.exports = App;
