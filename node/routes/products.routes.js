const { getAllOrSingleProducts } = require('../controllers/products.controller');

const productRouter = require('express').Router();

productRouter.get("/details",getAllOrSingleProducts)
module.exports = productRouter;