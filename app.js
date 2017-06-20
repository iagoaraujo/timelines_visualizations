var express = require("express");
var app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/radial_3',function(req,res){
  res.sendFile('pagina_3_vertical.html', {"root": __dirname + '/views'});
});

app.get('/radial_4',function(req,res){
  res.sendFile('pagina_4_vertical.html', {"root": __dirname + '/views'});
});

app.get('/radial_5',function(req,res){
  res.sendFile('pagina_5_vertical.html', {"root": __dirname + '/views'});
});

module.exports = app;

console.log("Running at Port 3000");