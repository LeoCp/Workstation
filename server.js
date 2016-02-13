var express = require("express")
,app = express()
,morgan = require("morgan")
,jwt = require("jsonwebtoken")
,path = __dirname + '/public/_views/'
,mongoose = require('mongoose')
,db = mongoose.connection
,bodyParser = require('body-parser')
,port = process.env.PORT || 3000
,Usuario = require('./model/usuario');

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/public',  express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.get('/', function(request,response) {
  response.sendFile(path + "login.html");
});

//MongoDB
mongoose.connect('mongodb://localhost/dbWorkstation');

app.post('/',function (req,res) {
  var query = {$and:[
      {nome:req.body.nome},
      {senha:parseInt(req.body.senha)}
  ]};
  Usuario.findOne(query,function (err,usuario) {
    if (err){
      console.error(err);
    }else if(!usuario){
      console.log("Login invalido");
      res.json({type:false,data:"Usuario ou senha errada "});
    }else{
      console.log(usuario);
      app.get('/home', function(request,response) {
        response.sendFile(path + "home.html");
      });
        res.json({type:true,data:usuario.priv});
      }
  });

});

app.listen(port, function () {
  console.log("Ta rodando no http://localhost:"+port);
})
