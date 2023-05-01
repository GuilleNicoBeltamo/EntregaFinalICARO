const UserList = require("../models/UserList");

const checkUserID = async (req, res, next) => {

    const { userID } = req.session;

    if (!userID) {
        return res.redirect("/inicio-sesion");
    }

    const registredUsers = await UserList.findAll( {raw: true} );
    let existedUser = registredUsers.some((current) => current.id === userID);

    if (!existedUser) {
        return res.redirect("/inicio-sesion");
    }
    //req.user = existedUser;
    next();
};

const checkUserNotSigned = async (req, res, next) => {

    const { userID } = req.session;

    if (userID) {
        const registredUsers = await UserList.findAll( {raw:true} );
        let existedUser = registredUsers.some((current) => current.id === userID);

        return res.redirect(`/user/${existedUser.user}`);
    }
    next();
};


module.exports = { checkUserID, checkUserNotSigned };