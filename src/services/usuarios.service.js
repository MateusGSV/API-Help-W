const { error } = require("console");
const pool = require("../db/connection");

async function insert(params) {
  //const { nome, situacao } = params;
  var nome = params["nome"];
  var situacao = params["situacao"];

  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nome, situacao) VALUES ($1, $2) RETURNING *",
      [nome, situacao]
    );
    //res.status(201).json(result.rows[0]);
    //console.log(result.rows[0]);
    return {
      status: 201,
      message: {
        success: "Usuário criado",
      },
      data: result.rows[0],
    };
  } catch (err) {
    console.error(err);
    //res.status(500).json({ error: "Erro ao criar usuário" });
    return {
      status: 500,
      message: {
        error: "Erro ao criar usuário",
      },
    };
  }
  //return { nome, situacao };
}

async function get() {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    //res.status(200).json(result.rows);
    return {
      status: 200,
      message: {
        success: "Dados selecionados com sucesso!!!",
      },
      data: result.rows,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: {
        error: "Dados não selecionados",
      },
      data: {},
    };
    //res.status(500).json({ error: "Erro ao buscar usuários" });
  }
}
//pool.query("");
module.exports = {
  insert,
  get,
};
