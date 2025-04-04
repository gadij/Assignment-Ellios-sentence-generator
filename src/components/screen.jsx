import React, { useState, useMemo } from "react";
import TextArea from "./textArea";
import SubmitFooter from "./submitFooter";
import GenerateSentence from "./generateSentence";
import { getGeneratedSentence } from "../utils";
import data from "../data/enhance_sentences";

const MOCK_SETNTENCE = "The patient was sad.";
let getNewSentence = getGeneratedSentence();

const Screen = () => {
  // should support onFocus of the textArea + inputValue to enable the 'enhance' button
  const [inputValue, setInputValue] = useState(MOCK_SETNTENCE);
  // better hanlding of toggle between generatedSentence and submitFooter
  const [showFooter, setShowFooter] = useState(true);
  // support multi array of sentences with paginated index
  const [generatedSentence, setGeneratedSentence] = useState("");
  const [isDisableRetry, setIsDisableRetry] = useState(false);

  // might wrap callbacks with useCallback!!!!!
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleEnhanceClick = (value) => {
    const newSentence = getNewSentence(data, inputValue);
    // should be an array and push the new sentence to the collection
    setGeneratedSentence(newSentence);
    setShowFooter(value);
  };

  const retry = () => {
    const newSentence = getNewSentence(data, inputValue);
    if (!newSentence) {
      setIsDisableRetry(true);
      return;
    }
    setGeneratedSentence(newSentence);
  };

  const discard = () => {
    getNewSentence = getGeneratedSentence();
    setShowFooter(true);
    setIsDisableRetry(false);
    setGeneratedSentence("");
  };

  const handleUseText = () => {
    setInputValue(generatedSentence);
  };

  const isButtonDisabled = useMemo(() => {
    return !inputValue;
  }, [inputValue]);

  return (
    <div className="container">
      <TextArea label="data" value={inputValue} onChange={handleInputChange} />
      {showFooter ? (
        <SubmitFooter
          disabled={isButtonDisabled}
          onClick={handleEnhanceClick}
          label="Enhance"
        />
      ) : (
        <GenerateSentence
          generatedSentence={generatedSentence}
          onRetry={retry}
          isDisableRetry={isDisableRetry}
          onUseText={handleUseText}
          onDiscard={discard}
        />
      )}
    </div>
  );
};

export default Screen;
