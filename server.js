var express = require("express")
,app = express()
,path = __dirname + '/public/_views/'
,mongojs = require('mongojs')
,db = mongojs('dbWorkstation', ['usuarios'])
,bodyParser = require('body-parser');

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/public',  express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get("/",function(req,res){
  res.sendFile(path + "login.html");
  db.usuarios.find(function (err,docs) {
    console.log(docs);
  });

});

app.get("/home",function(req,res){
  res.sendFile(path + "home.html");
});

app.post("/",function(req,res){
    console.log((req.body).nome);
});

app.listen(3000, function () {
  console.log('Ta rodando na porta 3000!');
});
