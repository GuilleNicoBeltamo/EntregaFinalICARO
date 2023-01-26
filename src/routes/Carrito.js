const express = require("express");
const { Carrito } = require("../controllers/Carrito");
const { checkUserID } = require("../middelwares/checkUserID");

const router = express.Router();

router.get("/carrito", [checkUserID] , Carrito);

module.exports = router;