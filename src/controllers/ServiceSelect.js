const path = require("path");
const fs = require("fs");

const ServiceSelect = (req,res) => {
    const { id }  = req.params;

    const ServiceFile = fs.readFileSync(path.join(__dirname,"../models/ServiceList.json"));
    const ServiceList = JSON.parse(ServiceFile);
    const serviceList = ServiceList.find((us) => us.id == id);

    if(!id){
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }
    return res.status(200).render("pages/serviceDetail.ejs", { id , serviceList });
};

module.exports = {
    ServiceSelect
}