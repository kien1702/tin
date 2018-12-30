var bodyParser = require('body-parser');
var url ='mongodb://kien:kien1702@ds123822.mlab.com:23822/test1'
var mongoose = require('mongoose');
var student = require('../mongo/Schema')
mongoose.Promise = global.Promise;
mongoose.connect(url);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/create', function(req, res,next){
    res.render("create");
});

  app.post('/create', urlencodedParser, function(req, res,next){
    var newTodo = student(req.body).save(function(err, data){
      if(err) throw err;
      res.render("savedone",{data:data});
    });
})
}
