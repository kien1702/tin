var express = require("express");
var api = require("./api/controller")
var api2 = require("./api/controller2")
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set("view engine","ejs");
app.set("views", "./views");
app.use('/style', express.static('style'));
app.use(function(err,req,res,next){
  //console.log(err);
  res.send({err:err.message})
})
//api(app)
api2(app)

console.log("done");
if (process.send) {
      process.send('online');
 }
app.listen(process.env.PORT || 2002);
