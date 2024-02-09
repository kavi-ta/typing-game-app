const GetDistribution = (
  initialDistribution,
  finalDistribution,
  currentLevel,
  totalLevels
) => {
  return (
    initialDistribution +
    (finalDistribution - initialDistribution) * (currentLevel / totalLevels)
  );
};

exports.GetLevelWordDistribution = (
  initialWordsDistribution,
  finalWordsDistribution,
  currentLevel,
  totalLevels
) => {
  return {
    easy: GetDistribution(
      initialWordsDistribution.easy,
      finalWordsDistribution.easy,
      currentLevel,
      totalLevels
    ),
    medium: GetDistribution(
      initialWordsDistribution.medium,
      finalWordsDistribution.medium,
      currentLevel,
      totalLevels
    ),
    hard: GetDistribution(
      initialWordsDistribution.hard,
      finalWordsDistribution.hard,
      currentLevel,
      totalLevels
    ),
  };
};

exports.GetLevelTime = (initialTime, currentLevel) => {
  return initialTime + 10 * (currentLevel / 5);
};

exports.GetLevelWordCount = (initialWordCount, currentLevel) => {
  return initialWordCount + currentLevel + currentLevel / 10;
};
