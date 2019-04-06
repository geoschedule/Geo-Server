mongoose = require('mongoose');


const companySchema = new mongoose.Schema({
    name : {type: String, required: true}
})

Company = mongoose.model("Company", companySchema);

module.exports = {Company};