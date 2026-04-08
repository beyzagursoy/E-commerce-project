const initialState = {
    productList: [],
    total: 0,
    fetchState: "NOT_FETCHED",
    selectedProduct: null, 
    categories: [],
    limit: 25,
    offset: 0,
    filter: ""
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
      case "SET_SELECTED_PRODUCT":
    return { ...state, selectedProduct: action.payload, fetchState: "FETCHED" };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    case "SET_OFFSET":
      return { ...state, offset: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};