const brands = require("../models").brand;
module.exports = {
  list(_, res) {
    return brands
      .findAll({})
      .then((brands) => {
        res.status(200).send(brands);
      })
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return brands
      .findAll({
        where: {
          ambito: req.params.ambito,
        },
      })
      .then((brands) => res.status(200).send(brands))
      .catch((error) => res.status(400).send(error));
  },
};
