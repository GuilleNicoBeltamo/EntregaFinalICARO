const path = require("path");
const fs = require("fs");

const sendHomeView = (req,res) => {
    const { id }  = req.params;

    const usersFile = fs.readFileSync(path.join(__dirname,"../models/user.json"));
    const users = JSON.parse(usersFile);
    const UserLogued = users.find((current) => current.id === id);

    res.render("pages/user.ejs", { UserLogued } );
};

module.exports = { sendHomeView };