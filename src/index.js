const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(200).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
