import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSignedIn: false,  
  userName: "",
  photoUrl: ""


}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {photoURL, displayName} = action.payload
      state.userName = displayName
      state.photoUrl = photoURL
      state.isSignedIn = true
    },
    signOut(state) {
      state.isSignedIn = false
      state.userName = ''
      state.photoUrl = ''
    }
  }
})

export const USER_ACTIONS = userSlice.actions
export default userSlice
