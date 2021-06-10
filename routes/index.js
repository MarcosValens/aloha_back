/* Controllers */
const brandController = require("../controllers/brand-controller");
const marcaController = require("../controllers/marca-controller");
const productoController = require("../controllers/producto-controller");
const categoryController = require("../controllers/category-controller");
const subcategoryController = require("../controllers/subcategory-controller");
const productController = require("../controllers/product-controller");
module.exports = (app) => {
  app.get("/back/api/marcas/list", marcaController.list);
  app.get("/back/api/brand/list", brandController.list);
  app.get("/back/api/menu/categories", categoryController.list);
  app.get("/back/api/menu/subcategories/find", subcategoryController.find);
  app.get("/back/api/marcas/find", marcaController.list);
  app.get("/back/api/productos/list", productoController.list);
  app.get("/back/api/products/list", productController.list);
  app.get("/back/api/productos/find", productoController.find);
  app.get("/back/api/productos/offers", productoController.findOffer);
};
