import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ResDetails(props) {
  return (
    <div className="Details ResDetails">
      Res Details!
    </div>
  )
}

ResDetails.propTypes = {
  details: PropTypes.object
}

module.exports = ResDetails;
