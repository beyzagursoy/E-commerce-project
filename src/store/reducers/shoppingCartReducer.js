const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: [...action.payload], 
      };

    case 'ADD_TO_CART': {
      const productToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => String(item.product.id) === String(productToAdd.id)
      );

      if (existingItemIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { count: 1, checked: true, product: productToAdd }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => String(item.product.id) !== String(action.payload)),
      };

    case 'UPDATE_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          String(item.product.id) === String(action.payload.id)
            ? { ...item, count: action.payload.count }
            : item
        ),
      };

    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payload,
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};