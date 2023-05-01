const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const UserList = require("../models/UserList");


const sendSignupForm = (req,res) => {
    res.render("pages/registro.ejs");
};

const getSignupData = async (req,res) => {
    const { nameUser, user, password, correo, ubicacion } = req.body;
    
    const registredUsers = await UserList.findAll();
    const existedUser = registredUsers.some((current) => current.user === user);

    if (existedUser){
        res.render("pages/registredUser.ejs");
    }

    if (!existedUser) {
        await bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.session.userID;
                req.session.save();
                const generateID = crypto.randomUUID();
                UserList.create({ generateID, nameUser, user, hash, correo, ubicacion });
            });
        });
    res.redirect("/inicio-sesion");
    }
};

module.exports = {
    sendSignupForm,
    getSignupData,
};