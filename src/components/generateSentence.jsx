import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const GenerateSentence = ({
  generatedSentence = "text",
  onRetry,
  onUseText,
  // activate onPrve and onNext,
  // sending to the parent index++ or index-- for the parent
  // to send the corresponding sentence out of the 3
  onPrevSentence,
  onNextSentence,
  isDisableRetry,
  onDiscard,
}) => {
  return (
    <div className="footer">
      <TextField
        className="textArea"
        minRows={3}
        multiline
        value={generatedSentence}
      />
      <div className="button-wrapper">
        <Button onClick={onDiscard} className="g-button" variant="outlined">
          Disacrd
        </Button>
        <Button
          disabled={isDisableRetry}
          className="g-button"
          onClick={onRetry}
          variant="outlined"
        >
          try again
        </Button>
        <Button className="g-button" onClick={onUseText} variant="contained">
          use text
        </Button>
      </div>
      // implement pagination of sentences - extract to component // possible
      use of material ui
      <div>
        <span className="pagination" onClick={onPrevSentence}>
          {" "}
          {"<"}{" "}
        </span>
        <span> {"2 / 2"} </span>
        <span className="pagination" onClick={onNextSentence}>
          {" "}
          {">"}{" "}
        </span>
      </div>
    </div>
  );
};

export default GenerateSentence;
