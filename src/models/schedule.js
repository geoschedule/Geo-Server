const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema({
    EmployeeID : {type : String, required : true},
    CompanyID : {type: String, required : true},
    Date: {type : String, required : true},
    Sunday : {type : String},
    Monday : {type : String},
    Tuesday : {type : String},
    Wednesday : {type : String},
    Thursday : {type : String},
    Friday : {type : String},
    Saturday : {type : String}
})

const Schedule = mongoose.model("Schedule", scheduleSchema);