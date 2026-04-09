import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { createLogger } from 'redux-logger'; 

import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

const logger = createLogger();

const loadFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) return undefined;
    return {
      shoppingCart: {
        cart: JSON.parse(serializedCart)
      }
    };
  } catch  {
    return undefined;
  }
};
const saveToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state.shoppingCart.cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.error("Sepet kaydedilemedi:", err);
  }
};

const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer, 
  persistedState, 
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});