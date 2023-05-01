const UserList = require("../models/UserList");

const homeLogueado = async (req, res, next) => {

    const { userID } = req.session;
    const registredUsers = await UserList.findAll( {raw:true} );
    let existedUser = registredUsers.find((current) => current.id === userID);
    
    //console.log("DATOS A MOSTRAR", existedUser)

    if (existedUser) {
        return res.redirect(`/user/${existedUser.id}`);
    }
    next();
}

module.exports = { homeLogueado };