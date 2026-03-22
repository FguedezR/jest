let products = [];
let id = 0;

function resetProducts() {
  products = [];
  id = 0;
}

function addProduct() {
  if (!name || !price) {
    throw new Error("Name and price are required");
  }
  id++;
  const newProduct = { id, name, price };
  products.push(newProduct);
  return newProduct;
}

function removeProduct(idToRemove) {
  const index = products.findIndex((p) => p.id === idToRemove);
  if (index === -1) {
    throw new Error("Product not found");
  }
  products.splice(index, 1);
}

function getProducts() {
  return products;
}

function getProduct(idToFind) {
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

function updateProduct(idToUpdate, name, price) {
  const product = getProduct(idToUpdate);
  if (name) product.name = name;
  if (price) product.price = price;
}

module.exports = {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
};