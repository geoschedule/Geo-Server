const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")
const schedule = require("../controllers/schedule.js")
const images = require("../controllers/image")

Router.post("/user",user.create)
Router.get("/user/read", user.readAll)
Router.post("/schedule", schedule.create)
Router.get("/schedule", schedule.readAll)
Router.post("/images", images.add)

module.exports = {Router}