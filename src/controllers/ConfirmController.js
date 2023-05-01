const ServiceList = require("../models/ServiceList");
const UserList = require("../models/UserList");


const ConfirmController = async (req,res) => {
    const { userID }  = req.session;
    let registredUsers = await UserList.findAll({ raw: true });
    let serviceListed = await ServiceList.findAll({ raw: true });

    const existedUser = registredUsers.find((current) => current.id === userID);
    UserLogued = existedUser;
    res.render("pages/confirmacion.ejs", { UserLogued, serviceListed } );
};

module.exports = {
    ConfirmController
}