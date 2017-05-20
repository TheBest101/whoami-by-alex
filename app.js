const express = require('express');
var app = express();
var port = process.env.PORT || 3000
app.get("/", function(req,res){
  var ip = req.ip;
  var lang = req.headers["accept-language"].split(',')[0];
  var ware = req.headers['user-agent'].split(') ')[0].split(' (')[1];
  res.json({
    "ipaddress": ip,
    "language": lang,
    "software": ware
  })
})
app.listen(port);
