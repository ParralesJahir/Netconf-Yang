var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const interfaces = [
    {
      name: "Interface 1",
      address: "address 1",
      dataIn: "1020",
      dataOut: "500",
      status: "on",
      lastContact: new Date()
    },
    {
      name: "Interface 2",
      address: "address 2",
      dataIn: "2030",
      dataOut: "400",
      status: "off",
      lastContact: new Date()
    },
    {
      name: "Interface 3",
      address: "address 3",
      dataIn: "3010",
      dataOut: "300",
      status: "on",
      lastContact: new Date()
    }
  ]
  res.render('interfaces', { title: 'My Dashboard :: Interfaces', interfaces: interfaces });
});

module.exports = router;