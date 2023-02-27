const express = require("express");
const date = require("date-fns/addDays");

const app = express();

app.get("/", (req, res) => {
  const today = new Date();
  const future_date = date(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );
  const result = `${future_date.getDate()}/${
    future_date.getMonth() + 1
  }/${future_date.getFullYear()}`;
  res.send(result);
});

app.listen(3000);

module.exports = app;
