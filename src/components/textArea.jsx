import React from "react";
import TextField from "@mui/material/TextField";

const TextArea = ({ label, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      className="textArea"
      label={label}
      minRows={3}
      multiline
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextArea;
