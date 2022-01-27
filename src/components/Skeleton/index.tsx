import React from 'react';

import './index.css';

type props = {
  width: number | string;
  height: number | string;
  borderRadius?: number;
};

function Skeleton({ width, height, borderRadius }: props) {
  return <div className="container" style={{ width, height, borderRadius }} />;
}

export default Skeleton;
