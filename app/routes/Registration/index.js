import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadRegistrationContainer = () => import('containers/Registration' /* webpackChunkName: "Registration" */);

class Registration extends Component {
  render() {
    return <Chunk load={loadRegistrationContainer} />;
  }
}

export default Registration;
