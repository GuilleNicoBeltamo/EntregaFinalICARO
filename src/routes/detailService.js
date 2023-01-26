const express = require("express");
const { ServiceSelect } = require("../controllers/ServiceSelect");
const { SelectFail } = require("../controllers/SelectFail");
const { checkServiceID } = require("../middelwares/checkServiceID");

const router = express.Router();

router.get("/servicio", SelectFail);
router.get("/servicio/:id", [checkServiceID] ,ServiceSelect);

module.exports = router;