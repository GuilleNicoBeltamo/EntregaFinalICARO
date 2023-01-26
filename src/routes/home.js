const express = require("express");
const { home } = require("../controllers/Home");
const { homeLogueado } = require("../middelwares/homeLogueado");

const router = express.Router();

router.get("/", [homeLogueado] , home);

module.exports = router;