const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")
const schedule = require("../controllers/schedule.js")

Router.post("/user",user.create)
Router.get("/user/readAll", user.readAll)
Router.post("/user/read", user.read)
Router.post("/schedule", schedule.create)
Router.get("/schedule/readAll", schedule.readAll)
Router.post("/schedule/readOne", schedule.readOne)

module.exports = {Router}