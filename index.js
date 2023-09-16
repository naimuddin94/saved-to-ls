const getCartFromLS = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return [];
};

const savedCartToLS = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addCartToLS = (id) => {
  const cart = getCartFromLS();
  cart.push(id);
  savedCartToLS(cart);
};

const removeCartToLS = (id) => {
  const cart = getCartFromLS();
  const remaining = cart.filter((cartId) => cartId !== id);
  savedCartToLS(remaining);
};

module.exports = { addCartToLS, getCartFromLS, removeCartToLS };
