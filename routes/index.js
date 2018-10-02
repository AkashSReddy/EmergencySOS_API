var express = require("express");
var router = express.Router();
var auth = require("../middleware/authentication");
var passport = require("passport");
var Num = require("../models/num");
var phone = [];
var lat = [];
var lon = [];
var x;
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

router.get("/location", (req, res, next) => {
  Num.find({}, (err, objs) => {
    if (err) {
      Num.close();
    }
    for (var i = 0; i < Num.length; i++) {
      phone.push(objs[i].Phone);
      console.log(lat);

      lat.push(objs[i].lat);
      lon.push(objs[i].lon);
    }
    res.json({ Phone: phone, lat: lat, lon: lon });
  });
});

module.exports = router;
