import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
const PostCard = ({
	description,
	photo,

	comments,
	sharedImage,
	sharedVideo,
	sharedDocument,
	likes,
	followers,
	shares,
	isPromoted,
}) => {
	const { userName, photoUrl } = useSelector((s) => s.user);

	return (
		<Container>
			<div className="post-info">
				<img src={photoUrl} alt={userName} />
				<div>
					<span>
						<h1>{userName}</h1>
						<BsThreeDots />
					</span>
					<small>{followers} followers</small>
					<small>{isPromoted ? 'Promoted' : ''}</small>
				</div>
			</div>
			<div className="description">{description}</div>
			<div className="thumb">
				{sharedImage && <img src={sharedImage} />}
				{sharedVideo && (
					<video controls src={sharedVideo}>
					</video>
				)}
			</div>
			<div className="stats-container">
				<div className="stats">
					<img
						src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
						alt="like"
					/>
					<img
						src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
						alt="love"
					/>
					<img
						src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
						alt="celebrate"
					/>
					<small>{likes}</small>
				</div>
				<span>
					<small>{comments} comments</small> &#8226;{' '}
					<small>{shares} shared</small>
				</span>
			</div>
			<div className="icons">
				<button className="like-btn">
					<img src="/images/icons/like.svg" /> Like
				</button>
				<button>
					<img src="/images/icons/comment.svg" alt=" Comment" /> Comment
				</button>
				<button>
					<img src="/images/icons/share.svg" alt=" Share" /> Share
				</button>
				<button>
					<img src="/images/icons/send.svg" alt="Send" />
					Send
				</button>
				<div className="sub-icons">
					<span>
						<small>Like</small>
						<img src="/images/icons/like-field.svg" />
					</span>
					<span>
						<small>Celebrate</small>
						<img src="/images/icons/celebrate.svg" />
					</span>
					<span>
						<small>Support</small>
						<img src="/images/icons/support.svg" />
					</span>
					<span>
						<small>Love</small>
						<img src="/images/icons/love.svg" />
					</span>
					<span>
						<small>Insightful</small>
						<img src="/images/icons/insightful.svg" />
					</span>
					<span>
						<small>Curious</small>
						<img src="/images/icons/curious.svg" />
					</span>
				</div>
			</div>
		</Container>
	);
};

export default PostCard;

const Container = styled.article`
	background-color: white;
	border-radius: 0.6rem;
	margin-top: 0.5rem;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

	.stats-container {
		small {
			font-size: 12px;
			color: var(--grey);
			cursor: pointer;
			&:hover {
				color: var(--blue);
				text-decoration: underline;
			}
		}
		display: flex;
		justify-content: space-between;
		margin: 0 1rem;
		padding: 0.4rem 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		.stats {
			display: flex;
			justify-content: center;
			align-items: center;
			&:hover {
				color: var(--blue);
				text-decoration: underline;
				cursor: pointer;
			}
			img:not(:first-child) {
				margin-left: -4px;
			}
		}
	}
	.icons {
		padding: 0 1rem;
		display: flex;
		position: relative;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.4rem;
		padding-bottom: 0.4rem;
		border-radius: 0.3rem;
		button {
			color: var(--grey);
			font-size: 14px;
			cursor: pointer;
			font-weight: 600;
			display: flex;
			justify-content: space-between;
			align-items: center;
			transition: all 0.2s ease-in-out;
			padding: 0.7rem;
			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
			img {
				width: 24px;
				margin-right: 0.5rem;
			}
		}
	}
	.sub-icons {
		display: flex;
		opacity: 0;
		pointer-events: none;
		justify-content: space-between;
		align-items: center;
		top: -100%;
		left: -20px;
		padding: 0.3rem 1rem;
		position: absolute;
		background-color: white;
		border-radius: 2rem;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
		width: 272px;
		height: 48px;
		&:hover {
			span {
				img {
					width: 30px;
				}
			}
		}
		span {
			position: relative;

			small {
				position: absolute;
				background-color: rgba(0, 0, 0, 1);
				color: white;
				padding: 0.4rem;
				font-size: 14px;
				border-radius: 1rem;
				top: -70%;
				left: 50%;
				transform: translateX(-50%);
				opacity: 0;
				transition: all 0.2s ease-in-out;
			}
			cursor: pointer;
			&:hover {
				img {
					transform: scale(1.5) translateY(-10px);
				}
				small {
					opacity: 1;
					transform: translateX(-50%) translateY(-100%);
				}
			}
			img {
				width: 35px;
				transition: all 0.2s ease-in-out;
			}
		}
	}
	.like-btn {
		position: relative;
	}
	.like-btn:hover ~ .sub-icons {
		opacity: 1;
		pointer-events: all;
	}
	.post-info {
		display: flex;
		justify-content: flex-start;
		margin: 0.4rem 1rem;
		gap: 1rem;
		cursor: pointer;
		padding-top: 0.4rem;
		div {
			display: flex;
			flex-direction: column;
			width: 100%;
			small {
				color: var(--grey);
			}
			span {
				margin-bottom: -0.4rem;
				h1 {
					font-size: 14px;
					&:hover {
						color: var(--blue);
						text-decoration: underline;
					}
				}
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				svg {
					transition: all 0.2s ease-in-out;
					border-radius: 50%;
					cursor: pointer;
					color: var(--grey);
					font-size: 2.2rem;
					padding: 0.4rem 0.2rem;
					&:hover {
						background-color: rgba(0, 0, 0, 0.1);
					}
				}
			}
		}
		img {
			width: 48px;
			aspect-ratio: 1;
		}
	}
	.description {
		margin: 0 1rem;
	}
	.thumb {
		margin-top: 0.5rem;
		max-height: 350px;
		width: 100%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			aspect-ratio: 16/9;
		}
		video {
			width: 100%;
			height: 100%;
			object-fit: contain;
			aspect-ratio: 16/9;
			background-color: black;
		}
	}
`;
