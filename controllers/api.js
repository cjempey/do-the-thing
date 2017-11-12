/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

const Axis = require('../models/Axis');
const Task = require('../models/Task');

router.get('/axis/:id', (request, response) => {
    let id = request.params.id;
    // console.log (`API call to get task by id ${id}`);
    Axis.fetchAxisById(id, (err, axis) => {
        if (err) {
            response.json({success:false, message:`Failed to retrieve axis.  Error: ${err}`});
        }
        else if (axis) {
            response.json({success:true, axis: axis});
        }
        else {
            response.json({success:false});
        }
    });
});

router.get('/axis', (request, response) => {
    Axis.allAxes( (err, axes) => {
        if (err) {
            response.json({success:false, message: `Failed to load axes. Error: ${err}`});
        }
        else {
            response.write(JSON.stringify({success:true, axes:axes},null,2));
            response.end();
        }
    });
});

router.post('/axis', (request, response) => {
    console.log(`Request body: ${JSON.stringify(request.body)}`);
    let newAxis = new Axis({
        name: request.body.name,
        description: request.body.description,
        weight: request.body.weight
    });
    console.log(`New axis: ${newAxis}`);
    Axis.addAxis(newAxis, (err, axis) => {
        if (err) {
            response.json({success:false, message: `Failed to create new axis.  Error: ${err}`});
        }
        else {
            response.json({success:true, message:"Successfully created new axis."});
        }
    });
});

router.delete('/axis/:id', (request, response, next) => {
    let id = request.params.id;

    Axis.deleteAxisById(id, (err, axis) => {
        if (err) {
            response.json({success:false, message:`Failed to delete axis.  Error: ${err}`});
        }
        else if (axis) {
            response.json({success:true, message: "Deleted successfully."});
        }
        else {
            response.json({success:false});
        }
    });
});

/* TASK API ROUTES */
router.get('/task', (request, response) => {
    Task.allTasks( (err, tasks) => {
        if (err) {
            response.json({ success: false, message: `Failed to retreive tasks.  Error: ${err}`});
        }
        else {
            response.write(JSON.stringify({ success: true, tasks: tasks }, null, 2));
            response.end();
        }
    });
});

router.get('/task/incomplete', (request, response) => {
    Task.incompleteTasks( (err, tasks) => {
        if (err) {
            response.json({ success: false, message: `Failed to retreive tasks.  Error: ${err}`});
        }
        else {
            response.write(JSON.stringify({ success: true, tasks: tasks }, null, 2));
            response.end();
        }
    });
    
});

router.get('/task/complete', (request, response) => {
    Task.completeTasks( (err, tasks) => {
        if (err) {
            response.json({ success: false, message: `Failed to retreive tasks.  Error: ${err}`});
        }
        else {
            response.write(JSON.stringify({ success: true, tasks: tasks }, null, 2));
            response.end();
        }
    });
    
});

router.get('/task/:id', (request, response) => {
    let id = request.params.id;
    // console.log (`API call to get task by id ${id}`);
    Task.fetchTaskById(id, (err, task) => {
        if (err) {
            response.json({success:false, message:`Failed to retrieve task.  Error: ${err}`});
        }
        else if (task) {
            response.json({success:true, task: task});
        }
        else {
            response.json({success:false});
        }
    });
});

router.post('/task', (request, response) => {
    let newTask = new Task ({
        name: request.body.name,
        description: request.body.description,
        status: 'Not Started',
        values: request.body.values
    });
    Task.addTask(newTask, (err, task) => {
        if (err) {
            response.json({ success: false, message: `Failed to add new task. Error: ${err}` });
        }
        else {
            response.json({ success: true, task: task });
        }
    });
});

router.put('/task/:id', (request, response) => {
    let newTask = new Task(request.body);
    if (newTask.id != request.params.id) {
        response.json({success: false, message: `Failed to update task.  Cannot update id.`});
        return;
    }

    Task.updateTask(newTask, (err, task) => {
        if (err) {
            response.json({success: false, message: `Failed to update task. Error: ${err}`});
        }
        else {
            response.json({success: true, task: task});
        }
    });
});

router.delete('/task/:id', (request, response, next) => {
    let id = request.params.id;

    Task.deleteTaskById(id, (err, task) => {
        if (err) {
            response.json({ success: false, message: `Failed to delete task.  Error: ${err}`});
        }
        else {
            response.json({ success: true, message: 'Deleted task successfully.'});
        }
    });
});
    
            

module.exports = router;