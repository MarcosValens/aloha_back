const subcategory = require("../models").subcategory;
const category = require("../models").category;
module.exports = {
  list(_, res) {
    return subcategory
      .findAll({})
      .then((subcategory) => {
        res.status(200).send(subcategory);
      })
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return subcategory
      .findAll({
        where: {},
        include: [category],
      })
      .then((subcategory) => res.status(200).send(subcategory))
      .catch((error) => res.status(400).send(error));
  },
};
