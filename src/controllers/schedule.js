const Schedule = require('../models/schedule')

const create = async(req,res) => {
   const {employeeID, companyID,sunday, monday, tuesday, wednesday, thursday, friday, saturday} = req.body;

   const fields = {employeeID, companyID,sunday, monday, tuesday, wednesday, thursday, friday, saturday}
    // console.log(fields);
   try {
       console.log('looking for existing schedule')
    const foundSchedule = await Schedule.findOneAndUpdate(
        {employeeID},
        {fields}
    )
    console.log(foundSchedule)
    
    
    let newSchedule;
    if(!foundSchedule){
        console.log('creating new schedule')
        newSchedule = await Schedule.create(fields);
        console.log('made new schedule')
    }

    return res.status(200).send({success:true,newSchedule})
}catch(e){
    console.log(e);
    return res.status(400).send({success: false,error: e})
}
}

const readOne = async (req,res) => {
    const {employeeID} = req.body;

    try{
        console.log('read one hit')
        const schedules = await Schedule.findOne({employeeID});
    
        if(!schedules)
            throw new Error('didnt find a schedule')

        return  res.status(200).send({success:true,schedules})

    }catch(e){
        console.log(e)
        return res.status(400).send({success: false,error: e})
    }
}

const readAll = async(req, res) => {
    try{
        const schedules = await Schedule.find({})
        return  res.status(200).send({success:true,schedules})

    }catch(e){
        return res.status(400).send({success: false,error: e})
    }
    
    

}


module.exports = {create, readAll,readOne}