import React from "react";
import "../../../styles/UI.css";

export default function Switch({ setFieldValue, name }) {
  const [value, setValue] = React.useState(false);

  return (
    <div className="body">
      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => {
          setValue(!value);
          setFieldValue && setFieldValue(name || "status", value);
        }}
      >
        <div className="checkbox__ball"></div>
        {/* <span className="checkbox__text">{value ? "ON" : "OFF"}</span> */}
      </div>
    </div>
  );
}
