const express = require("express");
const { home } = require("../controllers/Home");
const { homeLogueado } = require("../middelwares/homeLogueado");
const { checkAdmin } = require("../middelwares/checkAdmin");

const router = express.Router();

router.get("/", [homeLogueado] , [checkAdmin], home);

module.exports = router;