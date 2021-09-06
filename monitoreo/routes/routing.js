var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const routes = [
    {
      protocol: "OSPF",
      interface: "G0/0/0/0",
      nextHop: "20:01:0d:b8:ac:00:30:00:00:00:00:00:00:00:02/64",
      timeUp: "12:05:03"
    },
    {
      protocol: "OSPF",
      interface: "G0/0/0/1",
      nextHop: "20:01:0d:b8:ac:00:30:00:00:00:00:00:00:00:02/128",
      timeUp: "12:05:03"
    },
    {
      protocol: "Local",
      interface: "G0/0/0/4",
      nextHop: "20:01:0d:b8:ac:00:30:00:00:00:00:00:00:00:02/64",
      timeUp: "12:05:03"
    }
  ]
  res.render('routing', { title: 'My Dashboard :: Routing', routes: routes });
});

module.exports = router;