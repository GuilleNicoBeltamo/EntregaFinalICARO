const fs = require("fs");
const path = require("path");

const checkUserID = (req, res, next) => {

    const { userID } = req.session;
    if (!userID) {
        return res.redirect("/inicio-sesion");
    }

    const usersFile = fs.readFileSync(path.join(__dirname,"../models/user.json"));
    const users = JSON.parse(usersFile);
    const existedUser = users.find((current) => current.id === userID);

    if (!existedUser) {
        return res.redirect("/inicio-sesion");
    }

    //req.user = existedUser;
    next();
};

const checkUserNotSigned = (req, res, next) => {

    const { userID } = req.session;
    if (userID) {
        const file = fs.readFileSync(path.join(__dirname, "../models/user.json"));
        let parsedFile = JSON.parse(file);
        const existedUser = parsedFile.find(( usuario )=> usuario.id === userID);

        return res.redirect(`/user/${existedUser.id}`);
    }
    next();
};


module.exports = { checkUserID, checkUserNotSigned };