import { API } from '../../api/api';

// 2. BASIC SET ACTIONS
export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (products) => ({ type: 'SET_PRODUCT_LIST', payload: products });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setFetchState = (state) => ({ type: 'SET_FETCH_STATE', payload: state });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });

// 3. THUNK ACTION CREATORS

export const fetchCategories = () => {
  return (dispatch, getState) => {
    const { categories } = getState().product;
    
    if (categories.length > 0) return;

    dispatch(setFetchState('FETCHING'));
    
    API.get('/categories')
      .then(res => {
        dispatch(setCategories(res.data));
        dispatch(setFetchState('FETCHED'));
      })
      .catch(err => {
        console.error("Kategori yüklenirken hata oluştu:", err);
        dispatch(setFetchState('FAILED'));
      });
  };
};

export const fetchProducts = (params = {}) => {
  return (dispatch) => {
    dispatch(setFetchState('FETCHING')); 

    API.get('/products', { params })
      .then(res => {
        dispatch(setProductList(res.data.products)); 
        dispatch(setTotal(res.data.total)); 
        dispatch(setFetchState('FETCHED')); 
      })
      .catch(err => {
        console.error("Ürün listesi yüklenirken hata oluştu:", err);
        dispatch(setFetchState('FAILED'));
      });
  };
};