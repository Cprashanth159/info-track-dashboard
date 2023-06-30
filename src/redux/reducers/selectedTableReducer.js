const initialState = {
    products: [],
  };
  
  const selectedTableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SELECTED_TABLE_DATA':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default selectedTableReducer;