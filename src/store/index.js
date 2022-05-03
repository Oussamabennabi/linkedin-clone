import { configureStore } from "@reduxjs/toolkit";
import moduleSlice from "./module-slice";
import postDataSlice from "./postData-slice";
import userSlice from "./user-slice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    module: moduleSlice.reducer,
    postData:postDataSlice.reducer
  }
})
export default store
