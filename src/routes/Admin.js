const express = require("express");
const { createServiceForm, createServiceData, serviceFullList, deleteServiceForm, deleteServiceData, editServiceForm, editServiceData, serviceUpdate} = require("../controllers/serviceListAdmin");
const { checkAdmin } = require("../middelwares/checkAdmin");

const router = express.Router();

router.get("/admin/service/create", [checkAdmin], createServiceForm); // Manda el formulario
router.post("/admin/service/create", [checkAdmin], createServiceData); // Recibe la info y guarda en la DB

router.get("/admin/service/delete", [checkAdmin],  deleteServiceForm); // Manda el formulario
router.post("/admin/service/delete", [checkAdmin],  deleteServiceData); // Recibe la info y guarda en la DB

router.get("/admin/service/edit", [checkAdmin],  editServiceForm); // Manda el formulario
router.post("/admin/service/edit", [checkAdmin],  editServiceData); // Recibe la info y guarda en la DB

router.get("/admin/service/list",  serviceFullList);

router.post("/admin/service/update",  serviceUpdate);

module.exports = router;