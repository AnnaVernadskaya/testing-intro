const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, 'asc');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const catalog = products.filter((product) => [1, 3, 4].includes(product.id));
    const result = sortProductsByPrice(catalog, 'asc');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, 'desc');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const catalog = [3, 1, 4].map((id) => products.find((product) => product.id === id));
    const result = sortProductsByPrice(catalog, 'desc');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const catalog = [5, 2, 6].map((id) => products.find((product) => product.id === id));
    const result = sortProductsByPrice(catalog, 'desc');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = products.filter((product) => [1, 3, 4].includes(product.id));
    sortProductsByPrice(catalog, 'asc');
    const productIds = catalog.map((product) => product.id);
    expect(productIds).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = products.filter((product) => [1, 3, 4].includes(product.id));
    sortProductsByPrice(catalog, 'desc');
    const productIds = catalog.map((product) => product.id);
    expect(productIds).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products);
    const productIds = products.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
