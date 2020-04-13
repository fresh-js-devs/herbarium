import React from "react";
import "./go-back.css";

const GoBackBtn = ({ goBack }) => {
  return (
    <div className="back" onClick={goBack}>
        Back
    </div>
  );
};

export default GoBackBtn;
