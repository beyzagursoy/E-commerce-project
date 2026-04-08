export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });

// --- THUNK ACTIONS ---
export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const productId = String(product.id);
    
    let newCart;
    const existingIndex = cart.findIndex(item => String(item.product.id) === productId);

    if (existingIndex >= 0) {
      newCart = cart.map((item, index) => 
        index === existingIndex 
          ? { ...item, count: item.count + 1 } 
          : item
      );
    } else {
      newCart = [...cart, { count: 1, checked: true, product }];
    }

    dispatch(setCart(newCart));
    
  };
};
export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    
    const newCart = cart
      .map(item => 
        String(item.product.id) === String(productId) 
          ? { ...item, count: item.count - 1 } 
          : item
      )
      .filter(item => item.count > 0);

    dispatch(setCart(newCart));
  };
};

export const clearProductFromCart = (productId) => {
    return (dispatch, getState) => {
        const { cart } = getState().shoppingCart;
        const newCart = cart.filter(item => String(item.product.id) !== String(productId));
        dispatch(setCart(newCart));
    }
}