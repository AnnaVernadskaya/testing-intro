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

function removeFromCart(cart, id) {
  return cart.filter((el) => el.id !== id);
}

function calculateCartSubtotal(cart) {
  let subtotal = 0;

  for (const item of cart) {
    subtotal = subtotal + item.price * item.quantity;
  }

  return subtotal;
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);

  let discount = 0;

  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }

  let delivery = 0;

  if (subtotal < 50000) {
    delivery = 30000;
  }

  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
