const express = require("express");
const { APIController } = require("../controllers/APIController");

const router = express.Router();

router.get("/API", APIController);

module.exports = router;