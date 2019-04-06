const express = require('express')
const Router = express.Router();
const user = require("../controllers/user.js")

Router.post("/user/create",user.create)

module.exports = {Router}