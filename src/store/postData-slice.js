import { createSlice } from '@reduxjs/toolkit';
// the showPhoto,showVideo and showDocument refer to wether the photo , video and document are shown in the main post
const initialState = {
	editorText: '',
	photo: null,
	showPhoto: false,
	video: null,
	showVideo: false,
	document: null,
	showDocument: false,
	isLoading: false,
	posts: []
};

export const POST_ACTIONS = {
	text: 'text',
	photo: 'photo',
	video: 'video',
	document: 'document',
	clearAll: 'clearAll',
};

const postDataSlice = createSlice({
	name: 'postData',
	initialState,
	reducers: {
		setPostData(state, action) {
			switch (action.payload.type) {
				case POST_ACTIONS.text:
					state.editorText = action.payload.data;
					break;
				case POST_ACTIONS.photo:
					state.photo = action.payload.data;
					state.showPhoto = action.payload.showPhoto ? true : false;
					break;
				case POST_ACTIONS.video:
					state.video = action.payload.data;
					state.showVideo = action.payload.showVideo ? true : false;
					break;
				case POST_ACTIONS.document:
					state.showDocument = action.payload.showDocument ? true : false;
					break;
				default:
					break;
			}
		},
		clearPost(state, action) {
			switch (action.payload.type) {
				case POST_ACTIONS.photo:
					state.photo = null;
					state.showPhoto = false;
					break;
				case POST_ACTIONS.video:
					state.video = null;
					state.showVideo = false;
					break;
				case POST_ACTIONS.document:
					state.document = null;
					state.showDocument = false;
					break;
				case POST_ACTIONS.clearAll:
					state.editorText = '';
					state.photo = null;
					state.showPhoto = false;
					state.video = null;
					state.showVideo = false;
					state.document = null;
					state.showDocument = false;
					break;
				default:
					break;
			}
		},
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
		setPostFromFirebase(state, action) {
			state.posts = action.payload.data
		}
	},
});

export const POST_REDUCER_ACTIONS = postDataSlice.actions;
export default postDataSlice;
