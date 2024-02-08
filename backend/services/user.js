const { User, Score } = require("../models/user");

exports.createUser = async (userData) => {
  const user = new User(userData);
  let result;
  await user
    .save()
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return result;
};

exports.getUserById = async (userId) => {
  let user;
  await User.findById(userId)
    .exec()
    .then((userData) => {
      console.log(userData);
      user = userData;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return user;
};

exports.updateUserById = async (userId, userData) => {
  let updatedData;
  await User.findByIdAndUpdate(userId, userData, {
    new: true,
  })
    .exec()
    .then((user) => {
      console.log(user);
      updatedData = user;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return updatedData;
};

exports.getStatsByUserId = async (userId) => {
  let stats;
  await User.findById(userId, "id, statistics")
    .exec()
    .then((statsData) => {
      console.log(statsData);
      stats = statsData;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return stats;
};

exports.addScore = async (userId, scoreData) => {
  const score = new Score(scoreData);
  let result;
  await User.findByIdAndUpdate(
    userId,
    { $push: { statistics: score } },
    { new: true }
  )
    .exec()
    .then((statsData) => {
      console.log(statsData);
      result = statsData;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return result;
};
