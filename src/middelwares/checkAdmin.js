const bcrypt = require("bcrypt");
const UserList = require("../models/UserList");

const checkAdmin = async (req, res, next) => {
    const { user, password } = req.body;

    if (user){
        const registredUsers = await UserList.findAll( {raw: true} );
        let adminUser = registredUsers.find((current) => current.user === user);
        if (adminUser.user === "Admin") {
            const validPassword = bcrypt.compareSync(password, adminUser.hash);
            if (!validPassword) {
                return res.render("pages/invalidPass.ejs");
            } else {
                req.session.userID = adminUser.id;
                req.session.user = adminUser.user;
                req.session.save();
                return res.redirect("/admin/service/list")
            }
        }
    }
    next();
};

const NoAdminHome = async (req, res, next) => {
    const { userID } = req.session;
   if (userID) {
        const registredUsers = await UserList.findAll( {raw: true} );
        let existedUser = registredUsers.find((current) => current.id === userID);
        if(existedUser.user === "Admin"){
            return res.redirect("/admin/service/list")
        }
    }
    next();
}


module.exports = { checkAdmin, NoAdminHome };