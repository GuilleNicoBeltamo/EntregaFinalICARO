const ServiceList = require("../models/ServiceList");
const path = require("path");

const checkServiceID = async (req, res, next) => {

    let { id }  = req.params;
    id = Number(id)

    if (!id) {
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }

    const ListedServices = await ServiceList.findAll( {raw: true} );
    let existedService = ListedServices.some((current) => current.id === id);

    if (!existedService) {
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }

    next();
};

module.exports = { checkServiceID };