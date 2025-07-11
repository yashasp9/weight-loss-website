import React from "react";

const style = {
  display: "flex",
  background: "#FFFFFF",
  width: "fit-content",
  "border-radius": "5px",
  padding: "10px 10px"
};

const itemStyle = {
  "margin-right": "10px"
};

const ProductFeatureItem = () => {
  return (
    <div style={style}>
      <p style={itemStyle}>✗</p>
      <p>Only Follow Portion Control</p>
    </div>
  );
};

export default ProductFeatureItem;
