const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema({
    employeeID : {type : String, required: true},
    companyID : {type: String, required: true},
    sunday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    monday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    tuesday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    wednesday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    thursday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    friday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}},
    saturday : { scheduled: {type: String, required: true}, startTime: {type: String, required: true}, endTime: {type: String, required: true}}
})

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;