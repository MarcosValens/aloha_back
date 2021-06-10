const category = require("../models").category;
module.exports = {
  list(_, res) {
    return category
      .findAll({})
      .then((category) => {
        res.status(200).send(category);
      })
      .catch((error) => res.status(400).send(error));
  },
};
