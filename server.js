const express=require('express');
var path=require('path');

var app=express();


//app.use(express.static(path.join(_dirname,'public')));

app.use(express.json());

//var routes=require('./router/router');
//routes(app);

app.listen(3000);
console.log("Server is listening on port 3000");