mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    employeeID : {type : String, required : true},
    companyID : {type: String, required : true},
    name : {type: String,  required : true},
    email: {type: String}
})

const User = mongoose.model("User", userSchema);

module.exports = User;