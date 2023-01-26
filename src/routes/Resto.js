const express = require("express");
const router = express.Router();
const { ValidPages } = require("../middelwares/ValidPages");

router.get("/:resto", [ValidPages], 
    (req,res) => {return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));}
);

module.exports = router;