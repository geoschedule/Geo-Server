const User = require('../models/user.js')
const create = async (req,res) => {
    const {employeeID,companyID,name,email} =  req.body;
    console.log({employeeID,companyID,name,email})
    
    const fields = {
        employeeID : employeeID,
        companyID : companyID,
        name: name,
        email: email
    }
   
    console.log(req.body)
    try {
        const user = await User.create(fields);
        
        return res.status(200).send({success:true,User})
    }catch(e){
        return res.status(400).send({success: false,error: e})
    }
}

const read = async (req,res) => {
    const user = await User.findOne({type: req.body.employeeID}, (error) => {console.log(error, " ocurred")})
}

const readAll = async (req, res) => {

    try{
    const user = await User.find({});

    return res.status(200).send({success:true,user})
    }catch(e){
        return res.status(400).send({success: false,error: e})
    }
}



module.exports = {create, read, readAll}