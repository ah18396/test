var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){
  res.send("Hello NODEJS");
});


http.listen(80, function(){
  console.log('listening on *:3000');
});

