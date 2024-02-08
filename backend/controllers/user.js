const {
  createUser,
  getUserById,
  getStatsByUserId,
  updateUserById,
  addScore,
} = require("../services/user");

exports.createUser = async (req, res, next) => {
  await createUser(req.body)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getUserById = async (req, res, next) => {
  const id = req.params.id;
  await getUserById(id)
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.updateUserById = async (req, res, next) => {
  const id = req.params.id;
  const userData = req.body;
  await updateUserById(id, userData)
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.addScore = async (req, res, next) => {
  const id = req.params.id;
  const score = req.body;
  await addScore(id, score)
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getStatsByUserId = async (req, res, next) => {
  const id = req.params.id;
  await getStatsByUserId(id)
    .then((stats) => {
      return res.status(200).json(stats);
    })
    .catch((error) => {
      next(error);
    });
};
