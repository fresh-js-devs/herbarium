import React from "react";
//import "./GoBack.css";

const GoBack = ({ goBack }) => {
  return (
    <div className="back" onClick={goBack}>
      <span role="img" aria-label="back">
        <strong>Back</strong>
      </span>
    </div>
  );
};

export default GoBack;
