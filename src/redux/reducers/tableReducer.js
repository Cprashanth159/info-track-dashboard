const initialState = {
    products: [],
  };
  
  const tableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TABLE_DATA':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tableReducer;