import React, { useState } from "react";
import "../styles/Tooltip.css";

const Tooltip = ({ text, position }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="outer-container">
      <div className="tooltip-container">
        <button
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="tooltip-button"
        >
          Press
        </button>

        {visible && (
          <div className={`tooltip-box tooltip-${position}`}>{text}</div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
