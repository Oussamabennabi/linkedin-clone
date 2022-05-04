// firebase
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import { USER_ACTIONS } from '../store/user-slice';

export function signInAPI() {
	return (dispatch) => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((payload) => {
				dispatch(USER_ACTIONS.setUser(payload.user));

				
			})
			.catch((err) => alert(err));
	};
}

export function getUserAuth() {
	return (dispatch) => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return;
			dispatch(USER_ACTIONS.setUser(user));
		});
	};
}

export function signOutAPI() {
	return (dispatch) => {
		signOut(auth)
			.then(() => {
				dispatch(USER_ACTIONS.signOut());
			})
			.catch((err) => {
				alert(err);
			});
	};
}
