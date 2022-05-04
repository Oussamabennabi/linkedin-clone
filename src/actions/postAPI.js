import db, { storage } from '../firebase';
import { POST_REDUCER_ACTIONS } from '../store/postData-slice';
import {
	ref,
	uploadBytesResumable,
	getDownloadURL,
	
} from 'firebase/storage';
import {
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	getDocs,
	doc,
	query,
	orderBy,
	onSnapshot,
} from 'firebase/firestore';
const collectionRef = collection(db, 'Posts');

export function writePostData({
	userId,
	description,
	sharedImage,
	sharedDocument,
	sharedVideo,
	userName,
	userPhotoUrl,
	timestamp,
	comments,
	likes,
}) {
	return (dispatch) => {

		if (sharedImage) {
			const imagesRef = ref(storage, `images/${sharedImage.name}`);
			const uploadTask = uploadBytesResumable(imagesRef, sharedImage);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					dispatch(POST_REDUCER_ACTIONS.setLoading(true))
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				async () => {
					const imageDownloadURL = await getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							return downloadURL;
						}
					);
					addDoc(collectionRef, {
						userId,
						description,
						sharedImage: imageDownloadURL,
						userName,
						userPhotoUrl,
						timestamp,
						comments: 0,
						likes: 6,
					});
					dispatch(POST_REDUCER_ACTIONS.setLoading(false))

				}
			);
		}
		else if (sharedVideo) {
			const videosRef = ref(storage, `videos/${sharedVideo.name}`);
			const uploadTask = uploadBytesResumable(videosRef, sharedVideo);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					dispatch(POST_REDUCER_ACTIONS.setLoading(true))
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				async () => {
					const videoDownloadURL = await getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							return downloadURL;
						}
					);
					addDoc(collectionRef, {
						userId,
						description,
						sharedVideo: videoDownloadURL,
						userName,
						userPhotoUrl,
						timestamp,
						comments: 0,
						likes: 6,
					});
					dispatch(POST_REDUCER_ACTIONS.setLoading(false))
				}
			);
		}
		else if (sharedDocument) {
			const documentsRef = ref(storage, `documents/${sharedDocument.name}`);
			const uploadTask = uploadBytesResumable(documentsRef, sharedDocument);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					dispatch(POST_REDUCER_ACTIONS.setLoading(true))
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				async () => {
					const documentDownloadURL = await getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							return downloadURL;
						}
					);
					addDoc(collectionRef, {
						userId,
						description,
						sharedDocument: documentDownloadURL,
						userName,
						userPhotoUrl,
						timestamp,
						comments: 0,
						likes: 6,
					});
					dispatch(POST_REDUCER_ACTIONS.setLoading(false))
				}
			);
		}
		else {
			addDoc(collectionRef, {
				userId,
				description,
				userName,
				userPhotoUrl,
				timestamp,
				comments: 0,
				likes: 6,
			});
		}

	};
}

export function getPostData() {
	return dispatch => {
		// collectionRef.doc()
		const q = query(collectionRef, orderBy("timestamp", "decs"))

		onSnapshot(collectionRef, resp => {
			const data = resp.docs.map(item => item.data())
			dispatch(POST_REDUCER_ACTIONS.setPostFromFirebase({ data }))
		}
		)
	}
}