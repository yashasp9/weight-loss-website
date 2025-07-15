import React from 'react';

const style = {
  display: 'flex',
  background: '#FFFFFF',
  width: 'fit-content',
  'border-radius': '5px',
  padding: '10px 10px',
};

const itemStyle = {
  'margin-right': '10px',
};

const ProductFeatureItem = ({ text }) => {
  return (
    <div style={style}>
      <p style={itemStyle}>✗</p>
      <p>{text}</p>
    </div>
  );
};

export default ProductFeatureItem;
