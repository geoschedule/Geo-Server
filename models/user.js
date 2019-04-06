mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    EmployeeID : {type : String, required : yes},
    CompanyID : {type: String, required : yes},
    name : {type: String,  required : yes},
    email: {type: String, required: yes}
})

const User = mongoose.model("User", userSchema);

module.exports = {User};