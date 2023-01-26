const path = require("path")

const SelectFail = (req,res) => {
    return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
};

module.exports = {
    SelectFail
}