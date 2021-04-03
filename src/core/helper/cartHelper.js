export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const addAddressToCart = (item, next) => {
  let address = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("address")) {
      address = JSON.parse(localStorage.getItem("address"));
    }
    address.push({
      ...item,
      count: 1
    });
    localStorage.setItem("address", JSON.stringify(address));
    // next();
  }
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const loadAddress = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("address")) {
      return JSON.parse(localStorage.getItem("address"));
    }
  }
};
export const EmptyAddress = next => {
  if (typeof window !== undefined) {
    localStorage.removeItem("address");

  }
};


export const removeItemFromCart = productId => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

export const cartEmpty = next => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    next();
  }
};
