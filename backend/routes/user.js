const express = require("express");
const {
  createUser,
  getUserById,
  getStatsByUserId,
  updateUserById,
  addScore,
} = require("../controllers/user");
const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);

router.put("/:id/score", addScore);
router.get("/:id/stats", getStatsByUserId);

module.exports = router;
