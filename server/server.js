const http = require('http');
const fs = require('fs');
var express = require('express');

var app = express();

const options = {
  key: fs.readFileSync('58737872-www.kshitiz.com.key.pem'),
  cert: fs.readFileSync('58737872-www.kshitiz.com.cert.pem')
};

var httpServer=http.Server( app);

httpServer.listen(8000);
app.get('/serverload', function (req, res) {
    res.send('yeah');
})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/files/index.html',options,function(){
  });
})
app.get('/sw.js',function(req,res){
   res.header('content-type', 'application/javascript');
    res.sendFile(__dirname + '/files/sw.js',options,function(){
  });
})

app.use(express.static(__dirname+"/files"));
      

