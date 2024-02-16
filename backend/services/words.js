const { Word } = require("../models/words");
const {
  GetLevelWordDistribution,
  GetLevelWordCount,
  GetLevelTime,
} = require("../utils/Distribution");
const { settings, totalLevels } = require("../utils/DifficultyBaseSettings");

exports.getWordsForLevelAndDifficulty = async (levelNumber, difficulty) => {
  const difficultySettings = settings[difficulty];

  const levelWordCount = GetLevelWordCount(
    difficultySettings.initialWordCount,
    levelNumber
  );

  const levelTime = GetLevelTime(difficultySettings.initialTime, levelNumber);

  const levelWordsDistribution = GetLevelWordDistribution(
    difficultySettings.initialWordsDistribution,
    difficultySettings.finalWordsDistribution,
    levelNumber,
    totalLevels
  );
  const easyWordCount = levelWordsDistribution.easy * levelWordCount;
  const mediumWordCount = levelWordsDistribution.medium * levelWordCount;
  const hardWordCount = levelWordsDistribution.hard * levelWordCount;
  let words;
  await Word.findOne()
    .then((data) => {
      words = data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  easy_words = generateNRandomWord(parseInt(easyWordCount), words.easy);
  medium_words = generateNRandomWord(parseInt(mediumWordCount), words.medium);
  hard_words = generateNRandomWord(parseInt(hardWordCount), words.hard);
  words = [...easy_words, ...medium_words, ...hard_words];
  return {
    words: words,
    wordCount: parseInt(levelWordCount),
    time: levelTime,
    level: levelNumber,
  };
};

const generateNRandomWord = (wordCount, arr) => {
  let randomIndexes = [];
  let randomIndex;
  for (let i = 0; i <= wordCount; i++) {
    randomIndex = Math.floor(Math.random() * arr.length);
    randomIndexes.push(randomIndex);
  }
  const _arr = arr.filter((item, index) => randomIndexes.includes(index));
  return _arr;
};
