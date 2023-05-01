const express = require("express");
const { SelectFail } = require("../controllers/SelectFail");
const { sendHomeView } = require("../controllers/homeControllers");
const { checkUserID, checkUserNotSigned } = require("../middelwares/checkUserID");
const { checkAdmin ,NoAdminHome } = require("../middelwares/checkAdmin");


const router = express.Router();

router.get("/user", [checkUserID], [checkUserNotSigned], [checkAdmin], SelectFail);
router.get("/user/:id", [checkUserID], [NoAdminHome], sendHomeView);

module.exports = router;