const ServiceList = require("../models/ServiceList");
const UserList = require("../models/UserList");
const path = require("path");


const ServiceSelect = async (req,res) => {
    let { id }  = req.params;
    id = Number(id) 

    //console.log("ID que se pide ver", id)

    const ListedServices = await ServiceList.findAll( {raw: true} );
    let existedService = ListedServices.find((current) => current.id === id);

    //console.log("servicio que se encontró", existedService)

    if(!id){
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }

    const { userID }  = req.session;
    let registredUsers = await UserList.findAll({ raw: true });
    const existedUser = registredUsers.find((current) => current.id === userID);
    if(!existedUser){
        //return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
        return res.status(200).render("pages/serviceDetailWOC.ejs", { id , existedService });
    }

    return res.status(200).render("pages/serviceDetail.ejs", { id , existedService });
};

module.exports = {
    ServiceSelect
}