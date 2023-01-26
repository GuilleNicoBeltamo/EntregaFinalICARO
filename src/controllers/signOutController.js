const signOutController = (req, res) => {
    req.session.destroy();
    res.redirect("/inicio-sesion")
};

module.exports = {
    signOutController
};