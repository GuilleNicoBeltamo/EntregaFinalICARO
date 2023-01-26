const express = require("express");
const router = express.Router();
const { getSignupData, sendSignupForm } = require("../controllers/registro");
const { checkUserNotSigned } = require("../middelwares/checkUserID");

router.get("/registro", [checkUserNotSigned], sendSignupForm);
router.post("/registro", getSignupData);

module.exports = router;