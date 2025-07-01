const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, (error) => {
  if (error) {
    return console.error("Error starting server:", error);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
