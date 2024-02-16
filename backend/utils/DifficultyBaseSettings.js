const easy = {
  initialTime: 40,
  initialWordCount: 10,
  initialWordsDistribution: {
    easy: 1,
    medium: 0,
    hard: 0,
  },
  finalWordsDistribution: {
    easy: 0.2,
    medium: 0.3,
    hard: 0.5,
  },
};

const medium = {
  initialTime: 30,
  initialWordCount: 10,
  initialWordsDistribution: {
    easy: 0.5,
    medium: 0.5,
    hard: 0,
  },
  finalWordsDistribution: {
    easy: 0,
    medium: 0.3,
    hard: 0.7,
  },
};

const hard = {
  initialTime: 20,
  initialWordCount: 10,
  initialWordsDistribution: {
    easy: 0.2,
    medium: 0.3,
    hard: 0.5,
  },
  finalWordsDistribution: {
    easy: 0,
    medium: 0.1,
    hard: 0.9,
  },
};

exports.totalLevels = 10;

exports.settings = {
  easy,
  medium,
  hard,
};
