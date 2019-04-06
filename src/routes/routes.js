const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")

Router.post("/user",user.create)
Router.get("/user", user.read)

module.exports = {Router}