import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadClientContainer = () => import('containers/Client' /* webpackChunkName: "Client" */);

class Client extends Component {
  render() {
    return <Chunk load={loadClientContainer} />;
  }
}

export default Client;
