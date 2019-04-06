const Schedule = require('../models/schedule')

const create = async(req,res) => {
   const {EmployeeID, CompanyID,Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday} = req.body;

   const fields = {EmployeeID, CompanyID,Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}

  

   try {
    const Schedule = await Schedule.create(fields);

    return res.status(200).send({success:true,Schedule})
}catch(e){
    return res.status(400).send({success: false,error: e})
}
}

const readAll = async(req, res) => {
    const schedules = await Schedule.find({})
}


module.exports = {create, readAll}