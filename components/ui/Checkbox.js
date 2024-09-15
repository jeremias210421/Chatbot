import React from 'react';

const Checkbox = ({ ...props }) => {
  return <input type="checkbox" className="checkbox" {...props} />;
};

export default Checkbox;
