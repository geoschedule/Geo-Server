const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")
const schedule = require("../controllers/schedule.js")

Router.post("/user",user.create)
Router.get("/user", user.read)
Router.post("/schedule", schedule.create)
Router.get("/schedule", schedule.readAll)

module.exports = {Router}