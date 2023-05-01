const express = require("express");
const Router = express.Router();
const { checkUserID } = require("../middelwares/checkUserID");
const { signOutController } = require("../controllers/signOutController");

Router.get("/signout", [checkUserID] , signOutController);
// 

module.exports = Router;