const express = require("express");
const { getSigninData, sendSigninForm } = require("../controllers/InicioSesion");
const { checkUserNotSigned } = require("../middelwares/checkUserID");

const router = express.Router();

router.get("/inicio-sesion", [checkUserNotSigned], sendSigninForm);
router.post("/inicio-sesion", getSigninData);

module.exports = router;