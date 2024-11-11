const usuariosService = require("../services/usuarios.service");

const get = async function (req, res) {
  res.json(await usuariosService.get());
};

const insert = async function (req, res) {
  //var retorno = await usuariosService.insert(req.query);
  if (req.query["nome"] === undefined || req.query["situacao"] === undefined) {
    res.json({
      status: 201,
      message: {
        error: "Envie os parametros corretos",
      },
    });
  } else {
    res.json(await usuariosService.insert(req.query));
  }
};

module.exports = {
  get,
  insert,
};
