var bodyParser = require('body-parser');
var url ='mongodb://kien:kien1702@ds123822.mlab.com:23822/test1'
var mongoose = require('mongoose');
var student = require('../mongo/Schema')
mongoose.Promise = global.Promise;
mongoose.connect(url);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/todo/:id', function(req, res,next){
student.findOne({name:req.params.id},function(err, data){
          if(err) throw err;
          console.log(data)
          res.render('todo', {data: data});
  console.log(req.url);
}).catch(next)
});

  app.post('/todo/:id', urlencodedParser, function(req, res,next){
    student.findOne({name:req.params.id},function(err, data,cb){
      if(err) throw err;
      console.log(data)
      console.log(req.body.job)
      console.log(req.body.date)
    //  var e= new data({todolist:[req.body.todolist]});
      //  e.save(function(err,data){
          data.todolist.push({job:req.body.job,date:req.body.date})
                data.save(cb)
              res.render('todo', {data: data});
            console.log(req.body);
            for(i=0;i<data.todolist.length;i++)
        console.log(data.todolist[i].job)
}).catch(next);
})
}
