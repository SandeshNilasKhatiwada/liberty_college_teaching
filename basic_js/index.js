const express = require("express");
const app = express();
const indexRoutes = require("./routes/indexRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", indexRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
