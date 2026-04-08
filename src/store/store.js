import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { createLogger } from 'redux-logger'; // Süslü parantezli kullanım

import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

// En temel logger yapılandırması
const logger = createLogger();

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
);