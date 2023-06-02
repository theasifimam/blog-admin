import React, { useEffect } from "react";
import "../../../styles/UI.css";

export default function Switch({ setFieldValue, name, switchValue }) {
  const [value, setValue] = React.useState(switchValue && switchValue);

  return (
    <div className="body">
      <div
        className={`checkbox ${!value && "checkbox--on"}`}
        onClick={() => {
          setValue(!value);
          setFieldValue && setFieldValue(name || "status", value ? "1" : "0");
        }}
      >
        <div className="checkbox__ball"></div>
        {/* <span className="checkbox__text">{value ? "ON" : "OFF"}</span> */}
      </div>
    </div>
  );
}
