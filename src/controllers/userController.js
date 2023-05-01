const User = require("../models/User")
const path = require("path")

const getUserByID = async (req,res)=> {
    const { userName }  = req.params;

    const registredUsers = await UserList.findAll();
    let existedUser = registredUsers.find((current) => current.user === userName);

    if(!userName){
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }
    UserLogued = existedUser.dataValues;
    return res.status(200).render("pages/user.ejs", { UserLogued })
};

module.exports = {
    getUserByID
}