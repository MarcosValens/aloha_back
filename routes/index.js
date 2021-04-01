/* Controllers */
const marcaController = require("../controllers/marca-controller");
const productoController = require("../controllers/producto-controller");
module.exports = (app) => {
  app.get("/back/api/marcas/list", marcaController.list);
  app.get("/back/api/productos/list", productoController.list);
  app.get("/back/api/productos/find", productoController.find);
};
