const User = require('../models/user')
const mongoose = require('mongoose')

const create = async (req,res) => {
    const {employeeID,companyID,name,email} = req.body;
    
    const fields = {
        employeeID,
        companyID,
        name,
        email
    }
   
    try {
        const User = await User.create(fields);

        return res.status(200).send({success:true,User})
    }catch(e){
        return res.status(400).send({success: false,error: e})
    }
}

const read = async (req,res) => {
    User = await User.findOne({type: req.body.employeeID}, (error) => {console.log(error, " ocurred")})
}

const readAll = async (req, res) => {
    User = await User.findAll({})
}



module.exports = {create, read}