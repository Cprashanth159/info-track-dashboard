const initialState = {
    toggleSideNav: false,
  };
  
  const sideNavReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {
          ...state,
          toggleSideNav: !state.toggleSideNav,
        };
      default:
        return state;
    }
  };
  
  export default sideNavReducer;