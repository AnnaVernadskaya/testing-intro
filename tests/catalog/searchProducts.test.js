const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'Наушники');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, 'Чистый код');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, 'Настольная лампа');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, 'javascript');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'наушники');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '   ');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '\t\n');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
