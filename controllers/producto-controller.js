const Sequelize = require("sequelize");
const producto = require("../models").producto;
const url = require("url");
module.exports = {
  list(_, res) {
    return producto
      .findAll({})
      .then((producto) => res.status(200).send(producto))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return producto
      .findAll({
        where: {
          marca_id: req.query.marca_id,
        },
      })
      .then((producto) => res.status(200).send(producto))
      .catch((error) => res.status(400).send(error));
  },
};
