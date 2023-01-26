const fs = require("fs");
const path = require("path");

const ValidPages = (req, res, next) => {
    return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
}

module.exports = { ValidPages };