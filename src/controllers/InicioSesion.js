const bcrypt = require("bcrypt");
const UserList = require("../models/UserList");

const sendSigninForm = (req,res) => {
    res.render("pages/login.ejs");
};

const getSigninData = async (req,res) => {
    const { user, password } = req.body;

    const registredUsers = await UserList.findAll({ raw: true });
    let existedUser = registredUsers.find((current) => current.user === user);

    if (!existedUser) {
        return res.render("pages/invalidUser.ejs");
    }

    const validPassword = bcrypt.compareSync(password, existedUser.hash);
    if (!validPassword) {
        return res.render("pages/invalidPass.ejs");
    }

    req.session.userID = existedUser.id;
    req.session.user = existedUser.user;
    req.session.save();

    res.redirect(`/user/${existedUser.id}`);    
};

module.exports = {
    getSigninData,
    sendSigninForm
}