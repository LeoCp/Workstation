var express = require("express");
var app = express();
var path = __dirname + '/public/_views/';

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/public',  express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.sendFile(path + "login.html");
});

app.get("/home",function(req,res){
  res.sendFile(path + "home.html");
});

app.listen(3000, function () {
  console.log('Ta rodando na porta 3000!');
});
