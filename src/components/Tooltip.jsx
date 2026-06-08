import React from 'react';

// Drop-in replacement for Syncfusion's TooltipComponent
const Tooltip = ({ content, children, position = 'Top' }) => (
  <div className="tooltip-wrapper">
    {children}
    <span className="tooltip-text">{content}</span>
  </div>
);

export default Tooltip;
