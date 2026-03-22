const {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("../src/products");

beforeEach(() => {
  resetProducts();
});

