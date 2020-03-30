import React from "react";
import "./BackButton.css";

const BackButton = ({ goBack }) => {
  return (
    <div className="back" onClick={goBack}>
      <span role="img" aria-label="back">
        ↩️ <strong>Back</strong>
      </span>
    </div>
  );
};

export default BackButton;
