var bodyParser = require('body-parser');
var url ='mongodb://kien:kien1702@ds123822.mlab.com:23822/test1'
var mongoose = require('mongoose');
var student = require('../mongo/Schema')
mongoose.Promise = global.Promise;
mongoose.connect(url);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/home', function(req, res,next){
          res.render('profile')
    });

            app.post('/home', urlencodedParser, function(req,res,next){
                console.log(req.body.name);
              student.findOne({name:req.body.name}).then(function(student){

                console.log(student.name)
                  res.render('found', {data: student});}).catch(next)
                });

}
