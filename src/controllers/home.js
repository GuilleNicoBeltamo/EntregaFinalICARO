const ServiceList = require("../models/ServiceList");

const home = async (req,res) => {
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/home.ejs", { serviceListed } );
};

module.exports = {
    home
}