import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadDesignerContainer = () => import('containers/Designer' /* webpackChunkName: "Designer" */);

class Designer extends Component {
  render() {
    return <Chunk load={loadDesignerContainer} />;
  }
}

export default Designer;
