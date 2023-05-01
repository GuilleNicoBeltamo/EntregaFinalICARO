const express = require("express");
const { ConfirmController } = require("../controllers/ConfirmController");
const { checkUserID } = require("../middelwares/checkUserID");

const router = express.Router();

router.get("/confirmacion", [checkUserID], ConfirmController);

module.exports = router;