const ServiceList = require("../models/ServiceList");

const APIController = async (req,res) => {
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.send(serviceListed);
};

module.exports = {
    APIController
}