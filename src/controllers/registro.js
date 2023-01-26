const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const sendSignupForm = (req,res) => {
    res.render("pages/registro.ejs");
};

const getSignupData = (req,res) => {
    const { user, password, correo } = req.body;
    const file = fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parserFile = JSON.parse(file);
    const existedUser = parserFile.some((current) => current.user === user);

    if (existedUser){
        res.render("pages/registredUser.ejs");
    }

    if (!existedUser) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            const generateID = crypto.randomUUID();
            const newUser = {
                id: generateID,
                user,
                password: hash,    
                correo,           
            };
            req.session.userID; generateID;
            req.session.save();

            fs.writeFileSync(
                path.join(__dirname, "../models/user.json"),
                JSON.stringify(
                [...parserFile,newUser],
                null, 2)
            );
        });
    });
    }
    res.redirect("/inicio-sesion");

};

module.exports = {
    sendSignupForm,
    getSignupData,
};