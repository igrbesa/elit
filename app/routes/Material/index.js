import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadMaterialContainer = () => import('containers/Material' /* webpackChunkName: "Material" */);

class Material extends Component {
  render() {
    return <Chunk load={loadMaterialContainer} />;
  }
}

export default Material;
