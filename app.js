const express = require("express");
let addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let result = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
module.exports = app;
