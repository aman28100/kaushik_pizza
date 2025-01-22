import React from "react";
import "../css/Popup.css";

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {content}
        <button className="popup-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
