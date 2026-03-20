const { Schema,model } = require('../connection');

const myschema = new Schema ({
    name  : {type: String, require: true},
    email : {type: String, unique:true },
    password : {type: String, require: true}
}, { timestamps: true});

model('users',myschema)