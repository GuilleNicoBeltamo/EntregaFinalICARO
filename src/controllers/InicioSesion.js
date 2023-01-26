const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const sendSigninForm = (req,res) => {
    res.render("pages/login.ejs");
};

const getSigninData = (req,res)=>{
    const { user, password } = req.body;
    const file = fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile = JSON.parse(file);
    const existedUser = parsedFile.find(( usuario )=> usuario.user === user);
    
    if (!existedUser) {
        return res.render("pages/invalidUser.ejs");
    }

    const validPassword = bcrypt.compareSync(password, existedUser.password);
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