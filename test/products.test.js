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


describe("Gestión de Productos", () => {
  test("debe agregar un producto y aumentar el id", () => {
    const p = addProduct("Laptop", 1000);
    expect(p).toEqual({ id: 1, name: "Laptop", price: 1000 });
    expect(getProducts().length).toBe(1);
  });

  test("debe incrementar el id correlativamente", () => {
    addProduct("A", 10);
    const p2 = addProduct("B", 20);
    expect(p2.id).toBe(2);
  });

  test("debe devolver todos los productos", () => {
    addProduct("A", 10);
    addProduct("B", 20);
    expect(getProducts()).toHaveLength(2);
  });

  test("debe obtener un producto por su id", () => {
    addProduct("Tablet", 300);
    const found = getProduct(1);
    expect(found.name).toBe("Tablet");
  });

  test("debe lanzar un error si el producto a obtener no existe", () => {
    expect(() => getProduct(999)).toThrow("Product not found");
  });

  test("debe eliminar un producto", () => {
    addProduct("Mouse", 20);
    removeProduct(1);
    expect(getProducts()).toHaveLength(0);
  });

  test("debe actualizar un producto existente", () => {
    addProduct("Teclado", 50);
    const updated = updateProduct(1, "Teclado Mecánico", 80);
    expect(updated.name).toBe("Teclado Mecánico");
    expect(updated.price).toBe(80);
  });

  test("debe resetear la lista y el id correctamente", () => {
    addProduct("A", 1);
    resetProducts();
    expect(getProducts()).toHaveLength(0);
    // si agregamos uno nuevo tras el reset, el id debe ser 1 de nuevo
    const p = addProduct("B", 2);
    expect(p.id).toBe(1);
  });
});
