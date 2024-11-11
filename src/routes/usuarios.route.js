const express = require("express");
const router = express.Router({ mergeParams: true });

const usuariosController = require("../controllers/usuarios.controller");

router.route("/get").get(usuariosController.get);
router.route("/").get(usuariosController.get);

router.route("/insert").get(usuariosController.insert);

module.exports = router;
