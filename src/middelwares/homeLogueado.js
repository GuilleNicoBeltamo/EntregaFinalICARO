const fs = require("fs");
const path = require("path");

const homeLogueado = (req, res, next) => {

    const { userID } = req.session;

    const usersFile = fs.readFileSync(path.join(__dirname,"../models/user.json"));
    const users = JSON.parse(usersFile);
    const existedUser = users.find((current) => current.id === userID);
    
    if (existedUser) {
        return res.redirect(`/user/${existedUser.id}`);
    }

    next();

}

module.exports = { homeLogueado };