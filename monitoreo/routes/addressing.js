var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const addresses = [
    {
      name: "Address 1",
      ipv4Address: "192.168.11",
      ipv4Prefix: "/24",
      ipv6Address: "",
      ipv6Prefix: "",
      status: "on"
    },
    {
      name: "Address 2",
      ipv4Address: "",
      ipv4Prefix: "",
      ipv6Address: "20.01:0d:b8:ac:00:30:00:00:00:00:00:00:00:02",
      ipv6Prefix: "/64",
      status: "on"
    },
    {
      name: "Address 3",
      ipv4Address: "",
      ipv4Prefix: "",
      ipv6Address: "",
      ipv6Prefix: "",
      status: "off"
    }
  ]
  res.render('addressing', { title: 'My Dashboard :: Addressing', addresses: addresses });
});

module.exports = router;