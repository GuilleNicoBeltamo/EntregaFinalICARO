const home = (req,res) => {
    return res.status(200).render("pages/home.ejs")
};

module.exports = {
    home
}