const ServiceList = require("../models/ServiceList");

// Crear servicio
const createServiceForm = async (req,res) => {
    return res.status(200).render("pages/createService.ejs");
}
const createServiceData = async (req,res) => {
    const { name, desc, price } = req.body;
    await ServiceList.create({ name, desc, price });
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/AdminServiceList.ejs", { serviceListed } );
}

// Lista de servicios
const serviceFullList = async (req,res) => {
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/AdminServiceList.ejs", { serviceListed } );
}

// Borrar servicio
const deleteServiceForm = async (req,res) => {
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/deleteService.ejs", { serviceListed } );
}

const deleteServiceData = async (req,res) => {
    const { idDelete } = req.body;
    await ServiceList.destroy({ where: {id: idDelete} });
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/AdminServiceList.ejs", { serviceListed } );
}
// editar servicio
const editServiceForm = async (req,res) => {
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/editServices.ejs", { serviceListed } );
}

const editServiceData = async (req,res) => {
    const { idEdit } = req.body;
    id = Number(idEdit)
    const ListedServices = await ServiceList.findAll( {raw: true} );
    let editedService = ListedServices.find((current) => current.id === id);
    return res.status(200).render("pages/editService.ejs", { editedService } );
}

const serviceUpdate = async (req,res) => {
    const { name, desc, price, idUpdate } = req.body;
    await ServiceList.update({ name: name, desc: desc, price:price }, { where: {id: idUpdate} });
    let serviceListed = await ServiceList.findAll({ raw: true });
    return res.status(200).render("pages/AdminServiceList.ejs", { serviceListed } );
}

module.exports = {
    createServiceForm, 
    createServiceData,
    serviceFullList,
    deleteServiceForm,
    deleteServiceData,
    editServiceForm, 
    editServiceData,
    serviceUpdate
}