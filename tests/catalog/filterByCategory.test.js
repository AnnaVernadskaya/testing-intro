const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test.todo("'electronics' возвращает товары с ID [1, 2]");
  test.todo("'books' возвращает товары с ID [3, 6]");
  test.todo("'home' возвращает товары с ID [4, 5]");
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});

describe('filterByCategory', () => {
  test('"all" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const result = filterByCategory(products, 'all');
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

    test('"undefined" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const result = filterByCategory(products, undefined);
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

    test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const result = filterByCategory(products, "");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

});
