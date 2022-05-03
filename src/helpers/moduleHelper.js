import { useSelector } from "react-redux";
import { SELECTED_MODULE_ACTIONS } from "../store/module-slice";



export default function changeModuleHeaderTitle(selectedModule) {
  switch (selectedModule) {
    case SELECTED_MODULE_ACTIONS.main:
      return 'Create a post';
    case SELECTED_MODULE_ACTIONS.photo:
      return 'Edit your photo';
    case SELECTED_MODULE_ACTIONS.video:
      return 'Select/Edit your video';
    case SELECTED_MODULE_ACTIONS.document:
      return 'Share a document';
    
    default:
  }
}
