var express = require('express');
var app = express();
var parser = require('ua-parser');


app.get('/', function(req,res){
	var lang = req.headers['accept-language'].split(",");
	var lang = lang[0];
	var os = parser.parse(req.headers['user-agent']).os.toString();
	var device = parser.parseDevice(req.headers['user-agent']).toString();
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

	res.send(JSON.stringify({ ip: ip,language: lang,
	software: os }));
});

app.listen(process.env.PORT || 3000);