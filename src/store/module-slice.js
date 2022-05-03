import { createSlice } from "@reduxjs/toolkit";

export const SELECTED_MODULE_ACTIONS = {
  main: "main",
  photo: "photo",
  video: "video",
  document: "document",
}

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    isHidden: true,
    selectedModule: SELECTED_MODULE_ACTIONS.main
  },
  reducers: {
    showModule(state) {
      state.isHidden = false
    },
    hideModule(state) {
      state.isHidden = true
      state.selectedModule = SELECTED_MODULE_ACTIONS.main
    },
    changeModule(state, action) {
      switch (action.payload) {
        case SELECTED_MODULE_ACTIONS.main:
          state.selectedModule = SELECTED_MODULE_ACTIONS.main
          break;
        case SELECTED_MODULE_ACTIONS.photo:
          state.selectedModule = SELECTED_MODULE_ACTIONS.photo
          break;
        case SELECTED_MODULE_ACTIONS.video:
          state.selectedModule = SELECTED_MODULE_ACTIONS.video
          break;
        case SELECTED_MODULE_ACTIONS.document:
          state.selectedModule = SELECTED_MODULE_ACTIONS.document
          break;
        default:
          break;
      }
    }

  }
})


export const MODULE_REDUCER_ACTIONS = moduleSlice.actions

export default moduleSlice