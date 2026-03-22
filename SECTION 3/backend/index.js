const express = require('express');
const UserRouter = require('./routers/UserRouter');


const app = express();

const port = 5000;

// middleware

app.use(express.json());
app.use('/user', UserRouter);


app.get('/', (req, res) => {
    res.send('response from server');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});

app.get('/delete', (req, res) => {
    res.send('response from delete');
});

app.get('/update', (req, res) => {
    res.send('response from update');
});

app.listen(port, () => {
    console.log('server started');

});