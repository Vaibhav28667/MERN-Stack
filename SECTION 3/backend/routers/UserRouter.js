const express = require('express');

const router = express.Router();

const Model = require('../models/UserModels');

// route or endpoint
router.post('/add', (req, res) => {

    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getall 
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getbyemail
// : denotes parameter in url
router.get('/getbyemail/:email', (req, res) => {
    Model.findone({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);   
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getbycity
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// delete
router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

// update
router.get('/update', (req, res) => {
    res.send('response from user update');
});

// getby id
router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid');
});

module.exports = router;