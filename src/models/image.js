const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema({
    employeeId: {type: String, required: true},
    name: {type: String, required: true},
    link: {type: String, required: true}
})

Image = mongoose.model('Images', imageSchema);

module.exports = Image