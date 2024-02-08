const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// router imports
const userRouter = require("../backend/routes/user");
const wordRouter = require("../backend/routes/words");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {
  globalErrorHandlerMiddleware,
} = require("./middlewares/GlobalErrorHandling");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/word", wordRouter);
// Error handler middleware
app.use(globalErrorHandlerMiddleware);
// DB connection
mongoose.connect(`${process.env.DATABASE}`).then(() => {
  console.log("DB Connected!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
