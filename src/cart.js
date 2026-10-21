function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const result = cart.find((el) => {
    return el.id === product.id;
  });

  let newQuantity = quantity;

  if (result) {
    newQuantity = result.quantity + quantity;
  }

  if (newQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (result) {
    return cart.map((el) => {
      if (el.id === product.id) {
        return { ...el, quantity: newQuantity };
      }

      return el;
    });
  }

  const cartItem = { ...product, quantity };
  return [...cart, cartItem];
}

function changeQuantity(cart, id, quantity) {
  const result = cart.find((el) => {
    return el.id === id;
  });

  if (!result) {
    return [...cart];
  }

  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  if (quantity > result.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  return cart.map((el) => {
    if (el.id === id) {
      return { ...el, quantity };
    }

    return el;
  });
}

function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
