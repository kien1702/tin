var bodyParser = require('body-parser');
var url ='mongodb://kien:kien1702@ds123822.mlab.com:23822/test1'
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(url);
var todo = new mongoose.Schema({
  job:String,
  date:String
});
var student =new mongoose.Schema({
  name: String,
  mark: Number,
  todolist:[todo]

});
var student = mongoose.model('student', student);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/home', function(req, res,next){
          res.render('profile')
    });

            app.post('/home', urlencodedParser, function(req, res,next){
                console.log(req.body.name);
              student.findOne({}).then(function(student){
                console.log(student.name)
                console.log(student.mark)
                  res.render('found', {data: student});}).catch(next)
                });

}
