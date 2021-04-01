const Sequelize = require("sequelize");
const marca = require("../models").marca;
module.exports = {
  list(_, res) {
    return marca
      .findAll({})
      .then((marca) => {
        res.status(200).send(marca);
      })
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return marca
      .findAll({
        where: {
          ambito: req.params.ambito,
        },
      })
      .then((marca) => res.status(200).send(marca))
      .catch((error) => res.status(400).send(error));
  },
};
