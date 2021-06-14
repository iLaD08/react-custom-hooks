import React from "react";

const ScrollDirections = ({ position }) => (
  <div className='xy'>{`X: ${position.scrollX} Y: ${position.scrollY}`}</div>
);

export default ScrollDirections;
