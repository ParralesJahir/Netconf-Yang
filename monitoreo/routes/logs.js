var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const logs = [
    {
      eventId: "4",
      interface: "GigabitEthernet0/0/0",
      eventDescription: "Alta Actividad"
    },
    {
      eventId: "3",
      interface: "GigabitEthernet0/0/4",
      eventDescription: "Alta Actividad"
    },
    {
      eventId: "2",
      interface: "GigabitEthernet0/0/0",
      eventDescription: "Baja Actividad"
    }
  ]
  res.render('logs', { title: 'My Dashboard :: Logs', logs: logs });
});

module.exports = router;