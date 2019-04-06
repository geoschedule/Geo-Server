const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema({
    EmployeeID : {type : String, required : true},
    CompanyID : {type: String, required : true},
    Sunday : {starttime: {type: String}, endtime: {type: String}},
    Monday : {starttime: {type: String}, endtime: {type: String}},
    Tuesday : {starttime: {type: String}, endtime: {type: String}},
    Wednesday : {starttime: {type: String}, endtime: {type: String}},
    Thursday : {starttime: {type: String}, endtime: {type: String}},
    Friday : {starttime: {type: String}, endtime: {type: String}},
    Saturday : {starttime: {type: String}, endtime: {type: String}}
})

const Schedule = mongoose.model("Schedule", scheduleSchema);