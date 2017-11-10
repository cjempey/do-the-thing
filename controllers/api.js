/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

const Axis = require('../models/Axis');





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


module.exports = router;