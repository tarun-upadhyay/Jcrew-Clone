import {
    ADD_PRODUCTS_QUANTITY,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
  } from "./actiontypes";
  
  const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    cartcount: 0,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          products: action.payload,
        };
      case GET_PRODUCTS_FAILURE:
        return {
          ...state,
          isError: true,
        };
      case ADD_PRODUCTS_QUANTITY:
        return {
          ...state,
          isError: false,
        };
  
      default:
        return state;
    }
  };
  