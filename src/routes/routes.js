const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")
const schedule = require("../controllers/schedule.js")
const images = require("../controllers/image")

Router.post("/user",user.create)
Router.get("/user/readAll", user.readAll)
Router.post("/user/read", user.read)
Router.post("/schedule", schedule.create)


Router.post("/images", images.add)

Router.get("/schedule/readAll", schedule.readAll)
Router.post("/schedule/readOne", schedule.readOne)


module.exports = {Router}