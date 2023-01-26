const fs = require("fs");
const path = require("path");

const checkServiceID = (req, res, next) => {

    const { id }  = req.params;
    if (!id) {
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }

    const serviceFile = fs.readFileSync(path.join(__dirname,"../models/ServiceList.json"));
    const services = JSON.parse(serviceFile);
    const selectedService = services.find((current) => current.id === id);

    if (!selectedService) {
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }

    //req.user = existedUser;
    next();
};


module.exports = { checkServiceID };