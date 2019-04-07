const Image = require('../models/image')
const gcpd = require('../controllers/gcpdownload')
const gcpu = require('../controllers/gcpupload')
const rando = require('../util/nameGenerator')
const add = async (req, res) => {

    const name = req.body.name;
    //console.log(name)
    const link = "https://storage.googleapis.com/hatterhack/" + name;
    console.log(link)

    employeeId = "859458"
    const fields = 
    {
        employeeId: employeeId,
        name: name,
        link: link
    }

    

    try {

        const image = await Image.create(fields);
        
        return res.status(200).send({success:true,image})
    }catch(e){
        return res.status(400).send({success: false,error: e})
             }
}

module.exports = {add}