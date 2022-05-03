import db, { storage } from '../firebase';
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../store/postData-slice';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
	uploadBytes,
} from 'firebase/storage';
import {
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	getDocs,
	doc,
} from 'firebase/firestore';

export function setPostFiles(fileType, fileData) {
	let storageRef;
	switch (fileType) {
		case POST_ACTIONS.text:
			break;
		case POST_ACTIONS.photo:
			storageRef = ref(storage, 'images');
			break;
		case POST_ACTIONS.video:
			storageRef = ref(storage, 'videos');
			break;

		default:
			break;
	}
	const uploadTask = uploadBytesResumable(storageRef, fileData);
	uploadTask.on(
		'state_changed',
		(snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			POST_REDUCER_ACTIONS.setLoading(true);
			console.log('Upload is ' + progress + '% done');
		},
		(error) => {
			console.log(error.message);
		},
		() => {
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				console.log('File available at', downloadURL);
			});
		}
	);
}

export function writePostData({
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
		let imageDownloadURL = null;
		let videoDownloadURL = null;
		let documentDownloadURL = null;
		if (sharedImage) {
			const imagesRef = ref(storage, `images/${sharedImage.name}`);
			const uploadTask = uploadBytesResumable(imagesRef, sharedImage);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				() => {
					imageDownloadURL =  getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL) => {
              
							return downloadURL;
						}
          );
          console.log('fkgjfkgjfkgjfkgjfkgj    ', imageDownloadURL);
				}
			);
		}
		if (sharedVideo) {
			const videosRef = ref(storage, `videos/${sharedVideo.name}`);
			const uploadTask = uploadBytesResumable(videosRef, sharedVideo);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				() => {
					videoDownloadURL = getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							console.log(downloadURL);
							return downloadURL;
						}
					);
				}
			);
		}
		if (sharedDocument) {
			const documentsRef = ref(storage, `documents/${sharedDocument.name}`);
			const uploadTask = uploadBytesResumable(documentsRef, sharedDocument);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
				},
				() => {
					documentDownloadURL = getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							console.log(downloadURL);
							return downloadURL;
						}
					);
				}
			);
		}
		console.log(`hkgjbgjb ${imageDownloadURL}`);
		const collectionRef = collection(db, 'Posts');
		addDoc(collectionRef, {
			description,
			sharedImage: imageDownloadURL ? imageDownloadURL : null,
			sharedDocument: documentDownloadURL ? documentDownloadURL : null,
			sharedVideo: videoDownloadURL ? videoDownloadURL : null,
			userName,
			userPhotoUrl,
			timestamp,
			comments: 0,
			likes: 6,
		});
	};
}
