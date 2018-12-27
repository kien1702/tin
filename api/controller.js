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
var Todo = mongoose.model('todo', todo);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/todo/', function(req, res,next){
    Todo.find({}, function(err, data){
          if(err) throw err;
          res.render('todo', {data: data});
  console.log(req.url);
}).catch(next)
});

  app.post('/todo', urlencodedParser, function(req, res,next){
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
          Todo.find({}, function(err, data){
              res.render('todo', {data: data});
            console.log(req.body);
            for(i=0;i<data.length;i++)
        console.log(data[i].job)
});
  });
});
}
