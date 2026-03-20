const mongoose = require('mongoose');

const url = 'mongodb+srv://vaibhavsingh1278_db_user:vaibhav28@cluster0.kkw2nw6.mongodb.net/mydb2?appName=Cluster0'

// asynchronus function returns promise object
mongoose.connect(url)
.then((result) => {
  console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;