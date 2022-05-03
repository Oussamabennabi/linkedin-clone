import React, { useState } from 'react'
import styled from 'styled-components' 
// Icons
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import UserInfoCard from '../components/UserInfoCard'
import DiscoverCard from '../components/DiscoverCard'
const LeftSideBar = () => {
  const [showMoreState, setShowMoreState] = useState(false)

  return (
    <LeftBar>
    <UserInfoCard hide={showMoreState} />
    <DiscoverCard hide={showMoreState} />
    <ShowMore onClick={() => setShowMoreState(!showMoreState)} className='show-more'>
      {showMoreState ? "Show more" : "Show less"}
      {showMoreState ? < IoIosArrowDown /> : <IoIosArrowUp />}
    </ShowMore>
  </LeftBar>
  )
}

export default LeftSideBar
const ShowMore = styled.button`
  width: 100%;
  text-align: center;
  padding: 0.3rem 0;
  margin: .2rem 0;
  z-index:-4;
  color: var(--grey);
  background-color: transparent;
  transition: all .2s ease-in-out;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  border-radius: .2rem;
  font-weight: 600;
  margin-bottom: -.7rem;
  svg {
    font-size: 1.1rem;
  }
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
display: none;
  @media screen and (max-width: 768px){
    display: flex;
  }
`
const LeftBar = styled.aside`
grid-area: leftsidebar;
width: 100%;
margin-inline: auto;
    @media screen and (max-width: 1200px){
      max-width: 180px;
      width: 180px;
      margin: 0;
      margin-left: auto;
    }
    @media screen and (max-width: 992px){
      max-width: 203px;
      width: 203px;
    }
    @media screen and (max-width: 768px){
      grid-column-start: 1;
      grid-column-end: 3;
      max-width: 576px;
      width: 100%;
      margin: auto;
    }
`