const express = require('express');

const router = express.Router();

// route or endpoint
router.get('/add', (req, res) => {
    res.send('response from user add');
});

// getall 
router.get('/getall', (req, res) => {
    res.send('response from user getall');
}
);

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