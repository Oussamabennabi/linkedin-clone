import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSignedIn: false,  
  userName: "",
  photoUrl: "",
  userId: ''
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {photoURL, displayName,uid} = action.payload
      state.userName = displayName
      state.userId = uid
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
