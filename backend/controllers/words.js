const { getWordsForLevelAndDifficulty } = require("../services/words");

exports.getWordForLevelAndDifficulty = async (req, res, next) => {
  const levelNumber = parseInt(req.params.levelNumber);
  const difficulty = req.query.difficulty;
  await getWordsForLevelAndDifficulty(levelNumber, difficulty)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};
