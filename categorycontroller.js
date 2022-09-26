const Task = require('../model/categories');

exports.getAll = function(req,res){
    Task.getAllTask(function(err,task){
        if(err)
         res.send(err);
        res.send(task);
    });
};

exports.insert = function(req, res) {
  
    var new_task = new Task(req.body);
  
    //handles null error 
     if(!new_task.title){
        res.status(400).send({ error:true, message: 'Please provide title' });
      }
     else{
      Task.createTask(new_task, function(err, task) {
        if (err)
        res.send(err);
      res.json(task);
      });
    }
  };

exports.getByid = function(req, res){
    Task.getByid(req.params.taskid,function(err,task){
     if (err)
       res.send(err);
     res.json(task);
    });
};

exports.update=function(req,res){
   Task.updateByid(req.params.taskid,function(err,task){
     if(err)
      res.send(err);
     res.json(task);
   });
};

exports.remove=function(req,res){
    Task.getByid(req.params.taskid,function(req,res){
        if(err)
          res.send(err);
        res.json({message: 'category successful deleted'});
    });
};