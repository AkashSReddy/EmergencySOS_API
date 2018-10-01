var express = require("express");
var router = express.Router();
var auth = require("../middleware/authentication");
var passport = require("passport");
var dist = require("../services/dist");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ test: "first get request a success" });
});

router.post("/", (req, res, next) => {
  res.json(req.query);
});

router.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/success",
    failureRedirect: "/failure"
  })
);

router.get("/success", (req, res, next) => {
  res.json({ auth: "Success" });
});

router.get("/failure", (req, res, next) => {
  res.json({ auth: "Failure" });
});

router.post("/location", auth.isLoggedIn, (req, res, next) => {});

module.exports = router;
