import React, { useState } from "react";

export const Slider = ({ min = 0, max = 100, step = 1, defaultValue = 0, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer accent-pink-600"
      />
      <div className="text-white text-xs text-right mt-1">{value}</div>
    </div>
  );
};
