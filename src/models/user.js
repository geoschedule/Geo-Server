mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    EmployeeID : {type : String, required : true},
    CompanyID : {type: String, required : true},
    name : {type: String,  required : true},
    email: {type: String, required: true}
})

const User = mongoose.model("User", userSchema);

module.exports = {User};