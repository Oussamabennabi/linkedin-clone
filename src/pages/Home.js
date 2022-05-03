import React from 'react';
import styled from 'styled-components';

import RightSideBar from '../components/RightSideBar';
import LeftSideBar from '../components/LeftSideBar';
import StartNewPost from '../components/StartNewPost';
import RecomandedPeople from '../components/RecomandedPeople';
import PostCard from '../components/PostCard';

const Home = () => {
	return (
		<Container className="container">
			<Content className="content">
				<LeftSideBar />
				<Main>
					<StartNewPost />
					<div className="sort-by">
						<small>
							Sort by: <b>Top ▼</b>
						</small>
					</div>
					<RecomandedPeople />
					{/* <PostCard
            logo="/images/users/user1.jpeg"
            name="Annertech"
            followers="1.4k"
            description="Calling all #Drupal Developers! If you want to work with a great team on exciting and challenging projects, in a supportive and relaxed environment, then you've come to the right place.
See https://lnkd.in/eBjKk2r #remotework #remoteteams #remotejobs"
            photo="/images/icons/user.svg"
            likes="77"
            shares="23"
            comments="7"
            Promoted={true}
          /> */}
				</Main>
				<RightSideBar />
			</Content>
		</Container>
	);
};

const Container = styled.div`
	padding: 0;
`;
const Content = styled.div`
	display: grid;
	grid-template-areas: 'leftsidebar main rightsidebar';
	grid-template-columns:
		minmax(0, 5fr)
		minmax(0, 12fr)
		minmax(300px, 7fr);
	gap: 24px;
	justify-content: center;
	@media screen and (max-width: 1200px) {
		grid-template-columns: auto 432px 300px;
	}
	@media screen and (max-width: 992px) {
		grid-template-areas:
			'leftsidebar main'
			'. rightsidebar';
		grid-template-columns: minmax(0, 7fr) minmax(0, 17fr);
	}
	@media screen and (max-width: 768px) {
		grid-template-areas:
			'leftsidebar'
			'main'
			'rightsidebar';
	}
`;
const Main = styled.main`
	grid-area: main;
	max-width: 576px;
	width: 100%;
	margin-inline: auto;

	.sort-by {
		position: relative;
		cursor: pointer;
		margin-bottom: 0.7rem;
		&::after {
			content: '';
			position: absolute;
			top: calc(50% + 1px);
			left: 0;
			width: calc(100% - 89px);
			height: 1px;
			background-color: rgba(0, 0, 0, 0.3);
		}
		margin-top: 0.3rem;
		text-align: right;
		small {
			font-weight: 400;
			font-size: 12px;
			color: var(--grey);
			b {
				color: var(--black);
			}
		}
	}
	@media screen and (max-width: 1200px) {
		max-width: 432px;
		width: 432px;
		margin: 0;
		margin-right: auto;
	}
	@media screen and (max-width: 992px) {
		max-width: 493px;
		width: 100%;
	}
	@media screen and (max-width: 768px) {
		grid-column-start: 1;
		grid-column-end: 3;
		max-width: 576px;
		margin: auto;
		width: 100%;
	}
`;

export default Home;
