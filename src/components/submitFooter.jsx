import React from "react";
import Button from "@mui/material/Button";

const SubmitFooter = ({ label, onClick, disabled }) => {
  console.log("disabled", disabled);
  const handleClick = () => {
    onClick(false);
  };
  return (
    <div className="footer">
      <Button className="submitFooter" disabled={disabled} variant="contained" onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
};

export default SubmitFooter;
