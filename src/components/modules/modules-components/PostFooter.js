import React from 'react';
import { IoIosPaper, IoLogoYoutube } from 'react-icons/io';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
	MODULE_REDUCER_ACTIONS,
	SELECTED_MODULE_ACTIONS,
} from '../../../store/module-slice';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import {
	POST_ACTIONS,
	POST_REDUCER_ACTIONS,
} from '../../../store/postData-slice';
import {  writePostData } from '../../../actions/postAPI';
import {  serverTimestamp } from 'firebase/firestore';
const PostFooter = () => {
	const dispatch = useDispatch();
	const { editorText, photo, document, video } = useSelector((s) => s.postData);
	const { selectedModule } = useSelector((s) => s.module);
	const { userName, photoUrl,userId } = useSelector((s) => s.user);
	function handlDisableButton() {
		switch (selectedModule) {
			case SELECTED_MODULE_ACTIONS.main:
				return !editorText ? true : false;
			case SELECTED_MODULE_ACTIONS.photo:
				return !photo ? true : false;
			case SELECTED_MODULE_ACTIONS.video:
				return !video ? true : false;
			case SELECTED_MODULE_ACTIONS.document:
				return !document ? true : false;
			default:
				break;
		}
	}
  function handleSubmit(e) {
    if (e.target.innerText === "Post") {
			const payload = {
				userId,
				description: editorText,
				sharedImage: photo ? photo : null,
				sharedDocument: document ? document : null,
				sharedVideo: video ? video : null,
				userName,
				userPhotoUrl:photoUrl,
				timestamp: serverTimestamp(),
			};
      dispatch(writePostData(payload));
    }
		switch (selectedModule) {
			case SELECTED_MODULE_ACTIONS.main:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.text,
						data: editorText,
					})
				);
				dispatch(MODULE_REDUCER_ACTIONS.hideModule());
				break;
			case SELECTED_MODULE_ACTIONS.photo:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.photo,
						data: photo,
						showPhoto: true,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);

				break;
			case SELECTED_MODULE_ACTIONS.document:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.document,
						data: document,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);

				break;
			case SELECTED_MODULE_ACTIONS.video:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.video,
						data: video,
						showVideo: true,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);

				break;
			default:
				break;
		}
	}
	function handleGoBack() {
		switch (selectedModule) {
			case SELECTED_MODULE_ACTIONS.photo:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.photo,
						data: null,
						showPhoto: false,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);
				break;
			case SELECTED_MODULE_ACTIONS.video:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.video,
						data: null,
						showVideo: false,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);
				break;
			case SELECTED_MODULE_ACTIONS.document:
				dispatch(
					POST_REDUCER_ACTIONS.setPostData({
						type: POST_ACTIONS.document,
						data: null,
						showDocument: false,
					})
				);
				dispatch(
					MODULE_REDUCER_ACTIONS.changeModule(SELECTED_MODULE_ACTIONS.main)
				);
				break;
			default:
				break;
		}
	}
	return (
		<Container>
			{selectedModule === SELECTED_MODULE_ACTIONS.main && (
				<MainFooter disabledButton={true}>
					<button
						onClick={() =>
							dispatch(
								MODULE_REDUCER_ACTIONS.changeModule(
									SELECTED_MODULE_ACTIONS.photo
								)
							)
						}
					>
						<small>Add a photo</small>
						<MdOutlinePhotoSizeSelectActual />
					</button>
					<button
						onClick={() =>
							dispatch(
								MODULE_REDUCER_ACTIONS.changeModule(
									SELECTED_MODULE_ACTIONS.video
								)
							)
						}
					>
						<small>Add a video</small>
						<IoLogoYoutube />
					</button>
					<button
						onClick={() =>
							dispatch(
								MODULE_REDUCER_ACTIONS.changeModule(
									SELECTED_MODULE_ACTIONS.document
								)
							)
						}
					>
						<small>Add a document</small>
						<IoIosPaper />
					</button>
					<button>
						<small>Share that you’re hiring</small>
						<img src="/images/icons/jobs.svg" />
					</button>
					<button>
						<small>Celebrate an occasion</small>
						<img src="/images/icons/celebrate-occasion.svg" />
					</button>
					<button>
						<small>Create a poll</small>
						<img src="/images/icons/stats.svg" />
					</button>
					<button>
						<small>Add to your post</small>
						<BsThreeDots />
					</button>
				</MainFooter>
			)}
			<SecondaryFooter
				mainSelected={selectedModule === SELECTED_MODULE_ACTIONS.main}
			>
				{!(selectedModule === SELECTED_MODULE_ACTIONS.main) && (
					<button onClick={handleGoBack} className="back">
						Back
					</button>
				)}
				{selectedModule === SELECTED_MODULE_ACTIONS.main && (
					<button className="anyone">
						<img src="/images/icons/small-comment.svg" />
						Anyone
					</button>
				)}
				<button
					disabled={handlDisableButton()}
					className="postanddone"
					onClick={(e)=>handleSubmit(e)}
				>
					{selectedModule === SELECTED_MODULE_ACTIONS.main ? 'Post' : 'Done'}{' '}
				</button>
			</SecondaryFooter>
		</Container>
	);
};

export default PostFooter;
const Container = styled.footer`
	display: flex;
	align-items: center;
	padding: 12px 1rem;

	height: 53px;
	button.back {
		color: var(--blue);
		font-size: 16px;
		font-weight: bold;
		border-radius: 2rem;
		padding: 0.4rem 0.8rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		color: var(--blue);
		box-shadow: inset 0 0 0 1px var(--blue);
		&:hover {
			background-color: rgba(10, 102, 194, 0.1);
			box-shadow: inset 0 0 0 2px var(--blue);
		}
	}

	button.postanddone {
		font-size: 16px;
		padding: 0.4rem 0.8rem;
		color: white;
		font-weight: bold;
		background-color: var(--blue);
		&:hover {
			background-color: hsl(210, 90%, 25%);
		}
	}
	button.postanddone:disabled {
		cursor: not-allowed;
		color: hsla(0, 0%, 0%, 0.3);
		background-color: hsla(0, 0%, 0%, 0.1);
	}
`;
const MainFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		position: relative;
		img,
		svg {
			font-size: 37px;
			border-radius: 50%;
			cursor: pointer;
			padding: 0.5rem;
			fill: var(--grey);
			width: 100%;
			transition: all 0.2s ease-in-out;
			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		small {
			position: absolute;
			background-color: white;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			width: 180px;
			text-align: center;
			color: black;
			padding: 0.7rem;
			font-size: 14px;
			border-radius: 0.6rem;
			pointer-events: none;
			top: -70%;
			left: 50%;
			transform: translateX(-50%) translateY(-65%);
			opacity: 0;
			border-top-right-radius: 0;
			transition: all 0.2s ease-in-out;
		}
		&:hover {
			small {
				opacity: 1;
				transform: translateX(-50%) translateY(-50%);
			}
		}
	}
`;
const SecondaryFooter = styled.div`
	display: flex;
	justify-content: ${({ mainSelected }) =>
		mainSelected ? 'space-between' : 'flex-end'};

	gap: ${({ mainSelected }) => (mainSelected ? '0' : '1.3rem')};

	align-items: center;
	flex: 1;
	padding-right: 0.8rem;
	border-left: 1px solid rgba(0, 0, 0, 0.1);
	button {
		border-radius: 2rem;
		padding: 0.3rem 0.6rem;
		transition: all 0.2s ease-in-out;
		font-weight: 600;
		font-size: 14px;
		cursor: pointer;
	}
	button.anyone {
		margin-left: 0.5rem;
		color: var(--grey);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`;
