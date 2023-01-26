const express = require("express");
const { SelectFail } = require("../controllers/SelectFail");
const { sendHomeView } = require("../controllers/homeControllers");
const { checkUserID, checkUserNotSigned } = require("../middelwares/checkUserID");
const { ValidPages } = require("../middelwares/ValidPages");


const router = express.Router();

router.get("/user", [checkUserID], [checkUserNotSigned], SelectFail);
router.get("/user/:id", [checkUserID], sendHomeView);

module.exports = router;