var mongoose = require("mongoose");
var Num = require("../models/num");

// var stuff = new Num({
//   Phone: 9876543210,
//   lat: 33.33,
//   lon: 32.32
// });

// stuff.save();

// Num.find({}, (err, objs) => {
//   if (err) {
//     Num.close();
//   }
//   for (var i = 0; i < Num.length; i++) {
//     console.log(objs[i].lat);
//   }
// });
module.exports.calculate = (lat, lon) => {
  console.log("works");
  return lat;
  //   stuff.forEach(function(stuffum) {
  //     var radlat1 = (Math.PI * lat) / 180;
  //     var radlat2 = (Math.PI * stuff.lat) / 180;
  //     var theta = lon - stuff.lot;
  //     var radtheta = (Math.PI * theta) / 180;
  //     var dist =
  //       Math.sin(radlat1) * Math.sin(radlat2) +
  //       Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  //     if (dist > 1) {
  //       dist = 1;
  //     }sud
  //     dist = Math.acos(dist);
  //     dist = (dist * 180) / Math.PI;
  //     dist = dist * 60 * 1.1515;
  //     if (unit == "K") {
  //       dist = dist * 1.609344;
  //     }
  //     if (unit == "N") {
  //       dist = dist * 0.8684;
  //     }
  //   return dist;
  // });
};
