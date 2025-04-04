const getRandom = (min = 0, max = 6) => {
  return Math.floor(Math.random() * max) + min;
};

const getSentences = (data, input) => {
  //   console.log("input", input);
  const session = data.sessions.find((session) => {
    // console.log("session.input", session.input);
    // console.log("input", input);
    return session.input === input;
  });
  //   console.log("sessions", sessions);
  return session?.outputs;
};

const getGeneratedSentence = (maxRetries = 3) => {
  let retries = 0;
  const usedIndexes = {};
  // should check unique sentence
  function generateNewSentence(data, input) {
    retries++;
    if (retries > maxRetries) return false;
    // solve issue when user clicks 'enhance' and did fetch sentences
    const sentences = getSentences(data, input);
    let randomInt;
    do {
      randomInt = getRandom();
    } while (usedIndexes[randomInt]);
    usedIndexes[randomInt] = true;
    const newSentence = sentences[randomInt];
    return newSentence;
  }
  return generateNewSentence;
};

export { getRandom, getSentences, getGeneratedSentence };
