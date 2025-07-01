const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  // console.log(req.query);
  console.log(req);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
});
module.exports = router;
