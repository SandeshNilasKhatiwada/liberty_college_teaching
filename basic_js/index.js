const express = require("express");
const app = express();
const indexRoutes = require("./routes/indexRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
