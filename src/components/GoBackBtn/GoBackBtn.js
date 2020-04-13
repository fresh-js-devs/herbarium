import React from "react";
//import "./GoBack.css";

const GoBackBtn = ({ goBack }) => {
  return (
    <div className="back" onClick={goBack}>
      <span role="img" aria-label="back">
        <strong>Back</strong>
      </span>
    </div>
  );
};

export default GoBackBtn;
