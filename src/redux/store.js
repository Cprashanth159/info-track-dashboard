import { configureStore } from '@reduxjs/toolkit';
import sideNavReducer from './reducers/sideNavReducer';
import tableReducer from './reducers/tableReducer';
import selectedTableReducer from './reducers/selectedTableReducer';


const store = configureStore({
    reducer: {
      toggle: sideNavReducer,
      tableData: tableReducer,
      selectedTableData: selectedTableReducer
    },
  });

export default store;