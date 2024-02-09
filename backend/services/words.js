const { Word } = require("../models/words");
const {
  GetLevelWordDistribution,
  GetLevelWordCount,
  GetLevelTime,
} = require("../utils/Distribution");
const { settings } = require("../utils/DifficultyBaseSettings");

exports.getWordsForLevelAndDifficulty = async (levelNumber, difficulty) => {
  const difficultySettings = settings[difficulty];

  const levelWordCount = GetLevelWordCount(
    difficultySettings.initialWordCount,
    levelNumber
  );

  const levelTime = GetLevelTime(difficultySettings.intialTime);

  const levelWordsDistribution = GetLevelWordDistribution(
    difficultySettings.initialWordsDistribution,
    difficultySettings.finalWordsDistribution,
    levelNumber,
    difficultySettings.totalLevels
  );

  const easyWordCount = levelWordsDistribution.easy * levelWordCount;
  const mediumWordCount = levelWordsDistribution.medium * levelWordCount;
  const hardWordCount = levelWordsDistribution.hard * levelWordCount;
  let words;
  await Word.aggregate([
    {
      $project: {
        words: {
          $concatArrays: [
            { $slice: ["$easy", 3] },
            { $slice: ["$medium", 3] },
            { $slice: ["$hard", 3] },
          ],
        },
      },
    },
  ])
    .then((data) => {
      words = data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return {
    words: words,
    wordCount: parseInt(levelWordCount),
    time: levelTime,
    level: levelNumber,
  };
};
