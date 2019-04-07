const User = require('../models/user.js')
const create = async (req,res) => {
    const {employeeID,companyID,name} =  req.body;
    console.log('starting')
    
    const fields = {
        employeeID : employeeID,
        companyID : companyID,
        name: name,
        email: null
    }
   
    
    try {
        const found = await User.findOne({employeeID});

        if(found)
            throw new Error('user already exists')

        const user = await User.create(fields);
        console.log('user created')
        
        return res.status(200).send({success:true,User})
    }catch(e){
        console.log(e)
        return res.status(400).send({success: false,error: e})
    }
}

const read = async (req,res) => {
    const {employeeID} = req.body;
    try{
        console.log('finding user')
    const foundUser = await User.findOne({employeeID})
    console.log('found user')
    
    return res.status(200).send({success:true,foundUser})
    return 
    }catch(e){
        console.log(e)
        return res.status(400).send({success: false,error: e})
    }
}

const readAll = async (req, res) => {
    console.log('read all hit')

    try{
    const user = await User.find({});

    return res.status(200).send({success:true,user})
    }catch(e){
        console.log(e)
        return res.status(400).send({success: false,error: e})
    }
}



module.exports = {create, read, readAll}