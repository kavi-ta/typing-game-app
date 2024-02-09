const express = require("express");
const { getWordForLevelAndDifficulty } = require("../controllers/words");
const router = express.Router();

router.get("/level/:levelNumber/data", getWordForLevelAndDifficulty);

module.exports = router;
